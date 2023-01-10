import { TableRowCell } from './Transaction.styled';
export const Transaction = ({ type, amount, currency }) => (
  <tr>
    <TableRowCell>{type}</TableRowCell>
    <TableRowCell>{amount}</TableRowCell>
    <TableRowCell>{currency}</TableRowCell>
  </tr>
);
