import { DislikeIcon, BookmarkIcon, DetailsIcon } from 'assets/icons';
 
import { ItemOverlay } from './CardActions.style';

import Action from 'components/card/Action';


const CardActions = () => {
  return (
    <>
      <button>Post now</button>
      <ItemOverlay>
        <Action icon={DislikeIcon} info="dislike" label="Downvote"  />
        <Action icon={BookmarkIcon} info="bookmark" label="Save for later" />
        <Action icon={DetailsIcon} info="details" label="View details" />
      </ItemOverlay>
    </>
  )
}

export default CardActions;
