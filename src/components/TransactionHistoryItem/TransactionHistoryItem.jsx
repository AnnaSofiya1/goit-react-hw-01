import css from './TransactionHistoryItem.module.css'

export function TransactionHistoryItem(transaction) {
  return (
      <tr>
<td className={css.transactionType}>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
  </tr>
  );
}

export default TransactionHistoryItem;