import { Dislike, Bookmark, Details } from 'assets/icons';
 
import { ItemOverlay } from './CardActions.style';

import Action from 'components/card/Action';


const CardActions = () => {
  return (
    <>
      <button>Post now</button>
      <ItemOverlay>
        <Action icon={Dislike} info="dislike" label="Downvote"  />
        <Action icon={Bookmark} info="bookmark" label="Save for later" />
        <Action icon={Details} info="details" label="View details" />
      </ItemOverlay>
    </>
  )
}

export default CardActions;
