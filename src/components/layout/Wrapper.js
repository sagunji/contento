import styled from 'styled-components/macro';
 
export const Container = styled.div`
  flex: 1;
  flex-direction: row;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;