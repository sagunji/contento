import { DATA } from 'constants/data';
import Wrapper from 'modules/landing/components/news/Wrapper';

import News from '../components/news/News';

const Landing = () => {
  const TODAY_MOCK_DATA = DATA.concat(DATA);

  return (
    <Wrapper>
      <News posts={TODAY_MOCK_DATA}>
        <h1>
          Today's Pick
        </h1>
      </News>
      <News styles="mt-80" posts={DATA}>
        <div className="employee__branding">
          <div className="title__wrapper">
            <div className="icon">
              <img src="assets/icons/icons tag.svg" alt="tag" />
            </div>
            <h1>
              Employee Branding
            </h1>
          </div>
          <div className="seemore__wrapper">
            <span className="seemore">See more</span>
            <img src="assets/icons/icons - chevron right - 20.svg" alt="tag" />
          </div>
        </div>
      </News>
    </Wrapper>
  )
}

export default Landing;