import styled from 'styled-components/macro';
 
const HeaderWrapper = styled.div`
  padding: 0 2rem;
  height: 72px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000021;
  z-index: 2;
  position: sticky;
  top: 0;
`;

const LogoWrapper = styled.div`
  height: 40px;
  width: 40px;
  margin: 3px 0px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Navigation = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  gap: 17px;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    border-radius: 20px;
    padding: 0.8125rem 1.25rem;
    text-decoration: none;
    font-weight: 500;
    color: #3333336e;
  }

  a:hover {
    background: #1111110f 0% 0% no-repeat padding-box;
    color: #333333;
  }
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3px 0px;
`;

const Button = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #00b376;
  opacity: 1;
  margin-right: 8px;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

const PictureWrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export {
  HeaderWrapper,
  LogoWrapper,
  Navigation,
  UserWrapper,
  Button,
  PictureWrapper
};