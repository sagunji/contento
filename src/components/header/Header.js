import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

const Header = () => {
  return (
    <div className="header sticky__top">
      <div className="logo">
        <img src="/assets/icons/mandala-logo.png" alt="logo" />
      </div>
      <nav>
        <NavLink to={ROUTES.SCHEDULE}>Schedule</NavLink>
        <NavLink to={ROUTES.CONTENT}>Content</NavLink>
        <NavLink to={ROUTES.GROW}>Grow</NavLink>
        <NavLink to={ROUTES.REPORT}>Report</NavLink>
      </nav>
      <div className="user">
        <button className="btn__add">
          <img src="/assets/icons/icon plus.svg" alt="add item" />
        </button>
        <div className="profile-pic">
          <img src="/assets/user/Image 4@2x.png" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;