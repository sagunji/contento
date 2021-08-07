import PropTypes from 'prop-types';

import Card from 'components/card';

const News = ({ children, styles, posts }) => {
  return (
    <section className={styles}>
      {children}
      <div className="grid">
        { posts.map((dt, idx) => <Card key={idx} {...dt} />) }
      </div>
    </section>
  )
}

News.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  styles: PropTypes.string,
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