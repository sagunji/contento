import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${props => props.marginTop && css`
    margin-top: ${props.marginTop}px
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(342px, 2fr));
  grid-gap: 86px 24px;
  align-items: start;
  margin-top: 56px;
`;
