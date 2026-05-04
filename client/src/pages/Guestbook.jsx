import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/ui/SEO';
import { useLang } from '../contexts/LanguageContext';
import { getMessages, postMessage } from '../services/api';
import './Guestbook.css';

export default function Guestbook() {
  const queryClient = useQueryClient();
  const [name, setName]       = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);
  const { t, lang } = useLang();

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ['messages'],
    queryFn: getMessages
  });

  const mutation = useMutation({
    mutationFn: postMessage,
    onSuccess: (newMsg) => {
      queryClient.setQueryData(['messages'], (old = []) => [newMsg, ...old]);
      setName('');
      setMessage('');
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    mutation.mutate({ name, message });
  };

  const dateLocale = lang === 'zh' ? 'zh-TW' : 'en-US';

  return (
    <PageWrapper>
      <SEO
        title={t.guestbook.seoTitle}
        description={t.guestbook.seoDesc}
        path="/guestbook"
      />
      <div className="guestbook container">
        <h1 className="guestbook__title">{t.guestbook.title}</h1>
        <p className="guestbook__sub">{t.guestbook.sub}</p>

        <GlassCard className="guestbook__form-card">
          <form onSubmit={handleSubmit} className="guestbook__form">
            <div className="guestbook__field">
              <label className="guestbook__label">{t.guestbook.labelName}</label>
              <input
                className="guestbook__input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t.guestbook.placeholderName}
                maxLength={50}
                required
              />
            </div>
            <div className="guestbook__field">
              <label className="guestbook__label">{t.guestbook.labelMessage}</label>
              <textarea
                className="guestbook__textarea"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={t.guestbook.placeholderMessage}
                maxLength={500}
                rows={4}
                required
              />
              <span className="guestbook__count">{message.length} / 500</span>
            </div>
            <button
              type="submit"
              className="guestbook__submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? t.guestbook.submitting : t.guestbook.submit}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.p
                  className="guestbook__success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {t.guestbook.success}
                </motion.p>
              )}
            </AnimatePresence>
            {mutation.isError && (
              <p className="guestbook__error">{mutation.error?.message || t.guestbook.error}</p>
            )}
          </form>
        </GlassCard>

        <div className="guestbook__list">
          {isLoading && <p className="guestbook__loading">{t.guestbook.loading}</p>}
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={msg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <GlassCard className="guestbook__msg">
                  <div className="guestbook__msg-header">
                    <span className="guestbook__msg-name">{msg.name}</span>
                    <span className="guestbook__msg-date">
                      {new Date(msg.createdAt).toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="guestbook__msg-text">{msg.message}</p>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
          {!isLoading && messages.length === 0 && (
            <p className="guestbook__empty">{t.guestbook.empty}</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
