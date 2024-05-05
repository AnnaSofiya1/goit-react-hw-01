import css from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transactions.map((transaction,index) => <TransactionHistoryItem index={index} key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />)}
  </tbody>
</table>
  );
};


export default TransactionHistory