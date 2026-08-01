export default function StatusBadge({ value }) {
  const tone = String(value).toLowerCase().replace(/\s+/g, '-');
  return <span className={`status-badge ${tone}`}>{value}</span>;
}

