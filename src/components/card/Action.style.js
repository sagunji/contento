import styled from 'styled-components/macro';
 
export const ActionContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px #ffffff solid;
  align-items: center;
  display: inline-flex;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  cursor: pointer;

  img {
    height: 20px !important;
    width: 20px !important;
    margin: auto;
  }

  :hover {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #ffffff;
    opacity: 1;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }
`;