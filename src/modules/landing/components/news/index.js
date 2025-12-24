import PropTypes from 'prop-types';

import { Grid, Section } from './News.style';

import Card from 'components/card';

const News = ({ children, marginTop, posts }) => {
  return (
    <Section marginTop={marginTop}>
      {children}
      <Grid>
        { posts.map((dt, idx) => <Card key={idx} {...dt} />) }
      </Grid>
    </Section>
  )
}

News.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  marginTop: PropTypes.number,
  posts: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sourceTitle: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    favicon: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
}

export default News;