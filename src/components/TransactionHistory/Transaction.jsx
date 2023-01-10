import PropTypes from 'prop-types';
import { TableRowCell } from './Transaction.styled';
export const Transaction = ({ type, amount, currency }) => (
  <tr>
    <TableRowCell>{type}</TableRowCell>
    <TableRowCell>{amount}</TableRowCell>
    <TableRowCell>{currency}</TableRowCell>
  </tr>
);
Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
