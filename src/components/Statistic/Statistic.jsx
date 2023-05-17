import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({ id, label, percentage }) => {
  return (
    <li key={id} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
