import { useState  } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Article,
  SourceImage,
  ImageContainer,
  SourceContainer,
  SourceTitle,
  CardContent,
  ArticleImage
} from './Card.style';

import CardActions from './CardActions';

const Card = ({
  title,
  description,
  sourceTitle,
  image,
  favicon,
  domain
}) => {
  const [isActionShown, setIsActionShown] = useState(false);

  return (
    <Article>
      <ImageContainer
        onMouseEnter={() => setIsActionShown(true)}
        onMouseLeave={() => setIsActionShown(false)}>
        <ArticleImage src={image} alt={title} blur={isActionShown} />
        { isActionShown && <CardActions /> }
      </ImageContainer>
      <SourceContainer>
        <Link to={{ pathname: domain}} target="_blank">
          <SourceImage>
            <img src={favicon} alt={sourceTitle} />
          </SourceImage>
          <SourceTitle>{sourceTitle}</SourceTitle>
        </Link>
      </SourceContainer>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
    </Article>
  );
}

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sourceTitle: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  favicon: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;