import AppWrapper from 'components/layout/AppWrapper';
import Landing from 'modules/landing/screens/Landing.screen';

import SideBar from 'modules/sidebar/screens/SideBar.screen';

const MainPage = () => {
  return (
    <AppWrapper>
      <SideBar />
      <Landing />
    </AppWrapper>

  );
}

export default MainPage;