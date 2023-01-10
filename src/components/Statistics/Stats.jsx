import PropTypes from 'prop-types';
import { ListItem } from './Stats.styled';
export const Stats = ({ id, label, percentage }) => (
  <ListItem key={id}>
    <span>{label}</span>
    <span>{percentage}%</span>
  </ListItem>
);
Stats.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
