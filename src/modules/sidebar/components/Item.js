import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Item = ({ title, icon, route }) => {
  return (
    <Link to={route} className="item">
      <div className="image__container">
        <img src={icon} alt={title} />
      </div>
      <div className="item__title">
        {title}
      </div>
    </Link>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default Item;
