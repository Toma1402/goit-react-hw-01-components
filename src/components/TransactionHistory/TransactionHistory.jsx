import { Transaction } from './Transaction';
export const TransactionHistory = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          currency={transaction.currency}
          type={transaction.type}
          transaction={transaction}
        />
      ))}
    </tbody>
  </table>
);
