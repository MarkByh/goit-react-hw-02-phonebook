import PropTypes from 'prop-types';
import style from './styles.module.css';
export const Filter = ({ value, onChange }) => (
  <div className={style.filtere}>
    <h2>Find contacts by name</h2>
    <input
      className={style.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
