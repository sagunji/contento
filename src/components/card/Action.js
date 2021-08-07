import PropTypes from 'prop-types';

const Action = ({ icon, info}) => {
  return (
    <div className="action__container">
      <img src={icon} alt={info} />
    </div>
  )
}

Action.propTypes = {
  icon: PropTypes.string,
  info: PropTypes.string,
}

export default Action;