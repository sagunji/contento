import styled from 'styled-components';

import { DATA } from 'constants/data';
import Wrapper from 'modules/landing/components/Wrapper';

import News from '../components/news';
import Seemore from 'modules/landing/components/Seemore';

import { TagIcon } from 'assets/icons';

const EmployeeBrandingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  gap: 12px;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  border-radius: 50%;
  background-color: #0063fb;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;


const Landing = () => {
  const TODAY_MOCK_DATA = DATA.concat(DATA);

  return (
    <Wrapper>
      <News marginTop={0} posts={TODAY_MOCK_DATA}>
        <h1>Today's Pick</h1>
      </News>
      <News marginTop={80} posts={DATA}>
        <EmployeeBrandingWrapper>
          <TitleWrapper>
            <Icon><img src={TagIcon} alt="tag" /></Icon>
            <h1>Employee Branding</h1>
          </TitleWrapper>
          <Seemore />
        </EmployeeBrandingWrapper>
      </News>
    </Wrapper>
  )
}

export default Landing;