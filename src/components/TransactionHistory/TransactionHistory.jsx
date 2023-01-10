import { Transaction } from './Transaction';
import { Table, ColumnHead } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <ColumnHead>Type</ColumnHead>
        <ColumnHead>Amount</ColumnHead>
        <ColumnHead>Currency</ColumnHead>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Transaction
          key={item.id}
          amount={item.amount}
          currency={item.currency}
          type={item.type}
          transaction={item}
        />
      ))}
    </tbody>
  </Table>
);
