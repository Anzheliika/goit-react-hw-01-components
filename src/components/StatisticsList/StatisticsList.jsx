import PropTypes from 'prop-types';
import { Statistic } from 'components/Statistic/Statistic';
import css from './StatisticsList.module.css';

export const StatisticsList = ({ items }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {items.map(({ id, label, percentage }) => (
          <Statistic id={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
