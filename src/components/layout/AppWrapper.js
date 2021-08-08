import PropTypes from 'prop-types';

import styled from 'styled-components/macro';
 
export const Container = styled.main`
  max-width: 1388px;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 46px;
  padding-bottom: 30px
`;

const AppWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

AppWrapper.propTypes ={
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AppWrapper;
