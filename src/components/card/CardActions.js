import { Dislike, Bookmark, Details } from 'assets/icons'; 
import Action from 'components/card/Action';

const CardActions = () => {
  return (
    <div>
      <button>Post now</button>
      <div className="items__overlay">
        <Action icon={Dislike} info="dislike" />
        <Action icon={Bookmark} info="bookmark" />
        <Action icon={Details} info="details" />
      </div>
    </div>
  )
}

export default CardActions;
