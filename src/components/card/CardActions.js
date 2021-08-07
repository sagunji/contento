

const CardActions = () => {
  return (
    <div>
      <button>
        Post now
      </button>
      <div className="items__overlay">
        <div className="action__container">
          <img src="assets/icons/Smock_ThumbDownOutline_18_N.svg" />
        </div>
        <div className="action__container">
          <img src="assets/icons/bookmark.svg" />
        </div>
        <div className="action__container">
          <img src="assets/icons/svgexport-15.svg" />
        </div>
      </div>
    </div>
  )
}

export default CardActions;
