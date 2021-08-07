const SideBar = () => {
  return (
    <div className="sidebar__nav">
      <div className="item">
        <div className="image__container">
          <img src="/assets/icons/home.png" alt="home icon" />
        </div>
        <div className="filter">
          For you
        </div>
      </div>
      <div className="item">
        <div className="image__container">
          <img src="/assets/icons/svgexport-15-1.svg" alt="personalized" />
        </div>
        <div className="filter">
          Personalized
        </div>
      </div>

      <div className="filter__wrapper">
        <h3>FILTERS</h3>
        <div className="item">
          <div className="image__container">
            <img src="/assets/icons/bookmark.png" />
          </div>
          <div className="filter">
            Saved for later
          </div>
        </div>
        <div className="item">
          <div className="image__container">
            <img src="/assets/icons/icons tag-1.svg" />
          </div>
          <div className="filter">
            Topics
          </div>
        </div>
        <div className="item">
          <div className="image__container">
            <img src="/assets/icons/clock.png" />
          </div>
          <div className="filter">
            Latest
          </div>
        </div>
        <div className="item">
          <div className="image__container">
            <img src="/assets/icons/icon handpicked.svg" />
          </div>
          <div className="filter">
            Handpicked
          </div>
        </div> 
        <div className="item">
          <div className="image__container">
            <img src="/assets/icons/icon twitter.svg" />
          </div>
          <div className="filter">
            Influencers
          </div>
        </div>
      </div>

      <div className="mt-50">
        <p><span className="schedule__text">Schedule 2 more articles</span></p>
        <p>To fill this week.</p>
      </div>
    </div>
  );
}

export default SideBar;
