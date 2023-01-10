export const Transaction = ({ type, amount, currency }) => (
  <tr>
    <th>{type}</th>
    <th>{amount}</th>
    <th>{currency}</th>
  </tr>
);
