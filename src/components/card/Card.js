import PropTypes from 'prop-types';
import CardActions from './CardActions';

const Card = ({
  title,
  description,
  sourceTitle,
  image,
  favicon,
  domain
}) => {
  return (
    <article>
      <div className="image__container">
        <img src={image} alt={title} />
        <CardActions />
      </div>
      
      <div className="source">
        <div className="containter__image">
          <img src={favicon} alt={sourceTitle} />
        </div>
        <div className="source__title">{sourceTitle}</div>
      </div>
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