import PropTypes from 'prop-types';

import { Container } from './AppWrapper.style';

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
