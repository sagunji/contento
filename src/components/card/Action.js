import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';

const Action = ({ icon, info, label }) => {
  return (
    <>
      <div className="action__container" data-tip data-for={info} >
        <img src={icon} alt={info} />
      </div>
      <ReactTooltip id={info} place='top' effect="solid" className="tooltip" >
        {label}
      </ReactTooltip>
    </>
  )
}

Action.propTypes = {
  icon: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.string,
}

export default Action;