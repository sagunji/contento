import PropTypes from 'prop-types';

import { ActionContainer } from './Action.style';

import ReactTooltip from 'react-tooltip';

const Action = ({ icon, info, label }) => {
  return (
    <>
      <ActionContainer data-tip data-for={info} >
        <img src={icon} alt={info} />
      </ActionContainer>
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