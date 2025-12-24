import Item from 'modules/sidebar/components/Item';
import Message from 'modules/sidebar/components/Message';
import SideBarWrapper from 'components/layout/SideBarWrapper';
import FilterSection from 'modules/sidebar/components/FilterSection';

import { FILTER_ICON } from 'assets/icons';

const GENERAL = [{
  icon: FILTER_ICON.HomeIcon,
  title: 'For you',
  route: '/',
},{
  icon: FILTER_ICON.PersonalizedIcon,
  title: 'Personalized',
  route: '/',
}]

const FILTERS = [{
  icon: FILTER_ICON.BookmarkSolidIcon,
  title: 'Saved for later',
  route: '/',
},{
  icon: FILTER_ICON.TopicsIcon,
  title: 'Topics',
  route: '/',
}, {
  icon: FILTER_ICON.LatestIcon,
  title: 'Latest',
  route: '/',
}, {
  icon: FILTER_ICON.HandpickedIcon,
  title: 'Handpicked',
  route: '/',
}, {
  icon: FILTER_ICON.TwitterIcon,
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
