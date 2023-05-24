import PropTypes, { object } from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableTitle}>
          <th className={css.tableTitleItem}>Type</th>
          <th className={css.tableTitleItem}>Amount</th>
          <th className={css.tableTitleItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.term}>
              <td className={css.type}>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td className={css.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
};
