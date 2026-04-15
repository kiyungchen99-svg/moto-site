import { motion } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="container hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          手工鋼管車 · 自造者精神
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Steel &amp; Soul
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          五台手工鋼管車，五段旅程
        </motion.p>
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}
