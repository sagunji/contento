import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const Container = styled.div`
  width: 236px;
  margin-right: 74px;
  display: flex;
  flex-direction: column;
`;

const SideBarWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

SideBarWrapper.propTypes ={
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default SideBarWrapper;
