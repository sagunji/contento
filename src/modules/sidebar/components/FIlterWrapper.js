const FilterWrapper = ({ children }) => {
  return (
    <div className="filter__wrapper">
      <h3>FILTERS</h3>
      {children}
    </div>
  );
}

export default FilterWrapper;
