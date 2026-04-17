import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/ui/SEO';
import { getMessages, postMessage } from '../services/api';
import './Guestbook.css';

export default function Guestbook() {
  const queryClient = useQueryClient();
  const [name, setName]       = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

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

  return (
    <PageWrapper>
      <SEO
        title="留言板"
        description="留下你對 Steel & Soul 的話語，與義大利鋼管公路車愛好者交流。"
        path="/guestbook"
      />
      <div className="guestbook container">
        <h1 className="guestbook__title">留言板</h1>
        <p className="guestbook__sub">留下你的名字與話語</p>

        {/* 表單 */}
        <GlassCard className="guestbook__form-card">
          <form onSubmit={handleSubmit} className="guestbook__form">
            <div className="guestbook__field">
              <label className="guestbook__label">名字</label>
              <input
                className="guestbook__input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="你的名字"
                maxLength={50}
                required
              />
            </div>
            <div className="guestbook__field">
              <label className="guestbook__label">留言</label>
              <textarea
                className="guestbook__textarea"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="寫下你想說的..."
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
              {mutation.isPending ? '送出中...' : '送出留言'}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.p
                  className="guestbook__success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  留言成功！
                </motion.p>
              )}
            </AnimatePresence>
            {mutation.isError && (
              <p className="guestbook__error">{mutation.error?.message || '送出失敗，請再試一次'}</p>
            )}
          </form>
        </GlassCard>

        {/* 留言列表 */}
        <div className="guestbook__list">
          {isLoading && <p className="guestbook__loading">載入中...</p>}
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
                      {new Date(msg.createdAt).toLocaleDateString('zh-TW', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="guestbook__msg-text">{msg.message}</p>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
          {!isLoading && messages.length === 0 && (
            <p className="guestbook__empty">還沒有留言，成為第一個留言的人吧！</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
