import Card from 'components/card/Card';

const News = ({ children, styles, posts }) => {
  return (
    <section className={styles}>
      {children}
      <div className="grid">
        { posts.map(dt => <Card {...dt} />) }
      </div>
    </section>
  )
}

export default News;