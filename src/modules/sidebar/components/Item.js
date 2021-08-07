import PropTypes from 'prop-types';

const Item = ({ title, icon }) => {
  return (
    <div className="item">
      <div className="image__container">
        <img src={icon} alt={title} />
      </div>
      <div className="filter">
        {title}
      </div>
    </div>
  );
}

Item.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Item;
