import { ListItem } from './Stats.styled';
export const Stats = ({ id, label, percentage }) => (
  <ListItem key={id}>
    <span>{label}</span>
    <span>{percentage}%</span>
  </ListItem>
);
