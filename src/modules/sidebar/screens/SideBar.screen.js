import FilterWrapper from 'modules/sidebar/components/FilterWrapper';
import Item from 'modules/sidebar/components/Item';

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
}]

const SideBar = () => {
  return (
    <div className="sidebar__nav">
      {GENERAL.map((gen, idx) => <Item key={idx} {...gen} />)}

      <FilterWrapper>
        {FILTERS.map((filter, idx) => <Item key={idx} {...filter} />)}
      </FilterWrapper>
      <div className="mt-50">
        <p><span className="schedule__text">Schedule 2 more articles</span></p>
        <p>To fill this week.</p>
      </div>
    </div>
  );
}

export default SideBar;
