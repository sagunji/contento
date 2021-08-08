import { useState  } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    <article>
      <div className="image__container"
        onMouseEnter={() => setIsActionShown(true)}
        onMouseLeave={() => setIsActionShown(true)}>
        <img src={image} alt={title} className={`${isActionShown && 'blur'}`} />
        { isActionShown && <CardActions /> }
      </div>
      
      <Link to={{ pathname: domain}} target="_blank" className="source">
        <div className="containter__image">
          <img src={favicon} alt={sourceTitle} />
        </div>
        <div className="source__title">{sourceTitle}</div>
      </Link>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
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