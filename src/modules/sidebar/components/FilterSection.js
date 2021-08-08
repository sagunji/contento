import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px #00000021 solid;

  h3 {
    color: #bcbcbc;
    font-weight: 600;
    letter-spacing: 0.52px;
    margin-bottom: 12px;
  }
`;

const FilterSection = ({ children }) => {
  return (
    <Wrapper>
      <h3>FILTERS</h3>
      {children}
    </Wrapper>
  );
}

FilterSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default FilterSection;
