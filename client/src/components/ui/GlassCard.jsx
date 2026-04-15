import { motion } from 'framer-motion';
import './GlassCard.css';

export default function GlassCard({ children, className = '', accentColor, onClick, hoverable = false }) {
  const style = accentColor ? { '--card-accent': accentColor } : {};

  return (
    <motion.div
      className={`glass-card ${hoverable ? 'glass-card--hoverable' : ''} ${className}`}
      style={style}
      onClick={onClick}
      whileHover={hoverable ? { y: -6, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
