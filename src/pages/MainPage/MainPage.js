import Header from 'components/header';
import AppWrapper from 'components/layout/AppWrapper';
import Landing from 'modules/landing/screens/Landing.screen';

// import SideBar from 'modules/sidebar/screens/SideBar.screen';

const MainPage = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        {/* <SideBar /> */}
        <Landing />
      </AppWrapper>
    </>
  );
}

export default MainPage;