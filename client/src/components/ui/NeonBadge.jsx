import './NeonBadge.css';

export default function NeonBadge({ children, color }) {
  const style = color ? { '--badge-color': color } : {};
  return (
    <span className="neon-badge" style={style}>
      {children}
    </span>
  );
}
