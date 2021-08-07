import PropTypes from 'prop-types';

const FilterWrapper = ({ children }) => {
  return (
    <div className="filter__wrapper">
      <h3>FILTERS</h3>
      {children}
    </div>
  );
}

FilterWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default FilterWrapper;
