import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

import {
  Button,
  HeaderWrapper,
  LogoWrapper,
  Navigation,
  PictureWrapper,
  UserWrapper
} from 'components/header/Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src="/assets/icons/mandala-logo.png" alt="logo" />
      </LogoWrapper>
      <Navigation>
        <NavLink to={ROUTES.SCHEDULE}>Schedule</NavLink>
        <NavLink to={ROUTES.CONTENT}>Content</NavLink>
        <NavLink to={ROUTES.GROW}>Grow</NavLink>
        <NavLink to={ROUTES.REPORT}>Report</NavLink>
      </Navigation>
      <UserWrapper>
        <Button className="btn__add">
          <img src="/assets/icons/icon plus.svg" alt="add item" />
        </Button>
        <PictureWrapper className="profile-pic">
          <img src="/assets/user/Image 4@2x.png" alt="user" />
        </PictureWrapper>
      </UserWrapper>
    </HeaderWrapper>
  );
}

export default Header;