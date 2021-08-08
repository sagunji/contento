import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

import { Logo, UserImage } from 'assets/images';
import { PlusIcon } from 'assets/icons';

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
        <img src={Logo} alt="logo" />
      </LogoWrapper>
      <Navigation>
        <NavLink to={ROUTES.SCHEDULE}>Schedule</NavLink>
        <NavLink to={ROUTES.CONTENT}>Content</NavLink>
        <NavLink to={ROUTES.GROW}>Grow</NavLink>
        <NavLink to={ROUTES.REPORT}>Report</NavLink>
      </Navigation>
      <UserWrapper>
        <Button className="btn__add">
          <img src={PlusIcon} alt="add item" />
        </Button>
        <PictureWrapper className="profile-pic">
          <img src={UserImage} alt="user" />
        </PictureWrapper>
      </UserWrapper>
    </HeaderWrapper>
  );
}

export default Header;