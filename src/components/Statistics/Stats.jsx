export const Stats = ({ id, label, percentage }) => (
  <li key={id}>
    <span>{label}</span>
    <span>{percentage}%</span>
  </li>
);
