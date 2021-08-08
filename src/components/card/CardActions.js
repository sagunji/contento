import { Dislike, Bookmark, Details } from 'assets/icons'; 
import Action from 'components/card/Action';

const CardActions = () => {
  return (
    <div>
      <button>Post now</button>
      <div className="items__overlay">
        <Action icon={Dislike} info="dislike" label="Downvote"  />
        <Action icon={Bookmark} info="bookmark" label="Save for later" />
        <Action icon={Details} info="details" label="View details" />
      </div>
    </div>
  )
}

export default CardActions;
