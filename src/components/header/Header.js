import { Link, NavLink } from 'react-router-dom';

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
        <Link to={ROUTES.MAIN_PAGE}>
          <img src={Logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <Navigation>
        <NavLink to={ROUTES.SCHEDULE} activeClassName="active">Schedule</NavLink>
        <NavLink to={ROUTES.CONTENT} activeClassName="active">Content</NavLink>
        <NavLink to={ROUTES.GROW} activeClassName="active">Grow</NavLink>
        <NavLink to={ROUTES.REPORT} activeClassName="active">Report</NavLink>
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