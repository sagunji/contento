import PropTypes from 'prop-types';

const AppWrapper = ({ children }) => {
  return <main className="container">{children}</main>;
};

AppWrapper.propTypes ={
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}


export default AppWrapper;
