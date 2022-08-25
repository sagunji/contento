import { ChevronRightIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

import { Wrapper, Text } from './Seemore.style';

const Seemore = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Text>See More</Text>
        <img src={ChevronRightIcon} alt="chevronr right" />
      </Link>
    </Wrapper>
  )
}

export default Seemore;
