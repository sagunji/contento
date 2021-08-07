import FilterWrapper from 'modules/sidebar/components/FIlterWrapper';
import Item from 'modules/sidebar/components/Item';

const GENERAL = [{
  icon: '/assets/icons/home.png',
  title: 'For you'
},{
  icon: '/assets/icons/svgexport-15-1.svg',
  title: 'Personalized'
}]

const FILTERS = [{
  icon: '/assets/icons/bookmark.png',
  title: 'Saved for later'
},{
  icon: '/assets/icons/icons tag-1.svg',
  title: 'Topics'
}, {
  icon: '/assets/icons/clock.png',
  title: 'Latest'
}, {
  icon: '/assets/icons/icon twitter.svg',
  title: 'Influencers'
}, {
  icon: '/assets/icons/icon handpicked.svg',
  title: 'Handpicked'
}]

const SideBar = () => {
  return (
    <div className="sidebar__nav">
      {GENERAL.map(gen => <Item {...gen} />)}

      <FilterWrapper>
        {FILTERS.map(filter => <Item {...filter} />)}
      </FilterWrapper>
      <div className="mt-50">
        <p><span className="schedule__text">Schedule 2 more articles</span></p>
        <p>To fill this week.</p>
      </div>
    </div>
  );
}

export default SideBar;
