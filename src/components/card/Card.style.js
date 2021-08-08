import styled, { css } from 'styled-components/macro';
 
export const ImageWrapper = styled.div`
  max-width: 100%;
  height: 228px;
  position: relative;
`;

export const Article = styled.article`
  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 1;
  }
`;
  
export const ImageContainer = styled.div`
  max-width: 100%;
  height: 228px;
  position: relative;

  button {
    width: 146px;
    height: 56px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    font-weight: bold;
    color: #333333;
    background: white;
    border-radius: 28px;
    cursor: pointer;
  }
`;


export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  opacity: 1;

  ${props => props.blur && css`
    filter: blur(1px);
  `}
`

export const SourceContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    margin: 20px 0px;
    gap: 8px;
    text-decoration: none;
  }
}`;

export const SourceImage = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #1111111f;
  border-radius: 16px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const SourceTitle = styled.div`
  letter-spacing: 0.39px;
  color: #333333c7;
  text-transform: uppercase;
  opacity: 1;
  font-weight: 600;
`;

export const CardContent = styled.div`
  h2 {
    font-size: 20px;
    line-height: 26px;
    color: #333333;
    font-weight: bold;
  }
  p {
    margin: 8px 0px;
  }
`; 



