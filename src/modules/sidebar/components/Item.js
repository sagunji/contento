import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ItemContainer = styled.div`

a {
    height: 40px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
  }

  a:hover {
    background: #1111110f;
    font-weight: bold;
  }
`

const ImageContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  
  img {
      max-height: 100%;
      max-width: 100%;
  }
`;

const ItemTitle = styled.div`
  font-size: 16px;
  color: #333333;
`;

const Item = ({ title, icon, route }) => {
  return (
    <ItemContainer>
      <Link to={route}>
        <ImageContainer>
          <img src={icon} alt={title} />
        </ImageContainer>
        <ItemTitle>{title}</ItemTitle>
      </Link>
    </ItemContainer>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default Item;
