const Action = ({ icon, info}) => {
  return (
    <div className="action__container">
      <img src={icon} alt={info} />
    </div>
  )
}

export default Action;