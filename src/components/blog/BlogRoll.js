import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import style from './blog.module.css'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div id="blog-post-list">
        {posts &&
          posts.map(({ node: post }) => (
            <Link className={style.link} to={post.fields.slug}>
              <article className={style.blogPost}>
                <h3 className={style.title}>{post.frontmatter.title}</h3>
                <p className={style.subtitle}>
                  <span className="transparent">Autore: </span>
                  {/* {post.frontmatter.author} */}Ezio
                  <span className="transparent">
                    <span className={style.space}>/</span> Tempo di lettura:{' '}
                  </span>
                  {post.timeToRead} min{' '}
                  <span className="transparent">
                    <span className={style.space}>/</span>
                  </span>
                  {post.frontmatter.date}
                </p>
                <p class={style.excerpt}>{post.excerpt}</p>
              </article>
            </Link>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featuredpost: { ne: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 190)
              id
              timeToRead
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "D MMM YYYY", locale: "IT")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
