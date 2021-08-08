import Item from 'modules/sidebar/components/Item';
import Message from 'modules/sidebar/components/Message';
import FilterSection from 'modules/sidebar/components/FilterSection';
import SideBarWrapper from 'components/layout/SideBarWrapper';

const GENERAL = [{
  icon: '/assets/icons/home.png',
  title: 'For you',
  route: '/',
},{
  icon: '/assets/icons/svgexport-15-1.svg',
  title: 'Personalized',
  route: '/',
}]

const FILTERS = [{
  icon: '/assets/icons/bookmark.png',
  title: 'Saved for later',
  route: '/',
},{
  icon: '/assets/icons/icons tag-1.svg',
  title: 'Topics',
  route: '/',
}, {
  icon: '/assets/icons/clock.png',
  title: 'Latest',
  route: '/',
}, {
  icon: '/assets/icons/icon handpicked.svg',
  title: 'Handpicked',
  route: '/',
}, {
  icon: '/assets/icons/icon twitter.svg',
  title: 'Influencers',
  route: '/',
}];

const SideBar = () => {
  return (
    <SideBarWrapper>
      {GENERAL.map((gen, idx) => <Item key={idx} {...gen} />)}

      <FilterSection>
        {FILTERS.map((filter, idx) => <Item key={idx} {...filter} />)}
      </FilterSection>
      <Message />
    </SideBarWrapper>
  );
}

export default SideBar;
