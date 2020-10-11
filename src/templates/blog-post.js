import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/blog/Content'
import style from './blog-post.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Spacer from '../components/Spacer'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
  date,
  timeToRead
}) => {
  const PostContent = contentComponent || Content
  console.log(PostContent.title)

  return (
    <Container>
      {helmet || ''}
      <header className={style.header}>
        <img src={featuredimage} />
        <h4>la featured image è {featuredimage}</h4>
        <h1 className={style.title}>{title}</h1>

        <p className={style.subtitle}>
          <span className="transparent">
            {date}
            <span className={style.space}>{' '}/{' '}</span>
            <span className="autore">
              <span className="transparent">Autore: </span>
              {/* {author} */}
              <span className={style.space}></span> 
            </span> 
            Tempo di lettura:{' '}{timeToRead} min{' '}
          </span>
        </p>

        <p className={style.excerpt}>{description}</p>
      </header>
      <hr className="line" />
      <Row>
        <Col lg={6} offset={{ lg: 1 }}>
          <article>
            <PostContent content={content} className={style.blogContent} />
          </article>
        </Col>
      </Row>
      <Spacer h={8} />
      <Row>
        <Col lg={3} offset={{ lg: 1 }}>
          {tags && tags.length ? (
            <div>
              <h4>Tags</h4>
              <div className={style.taglist}>
                {tags.map((tag) => (
                  <Link to={`/tags/${kebabCase(tag)}/`} key={tag + `tag`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Col>
        <Col md={3}>
          <p className={style.socialShare}>Condividi sui social</p>
        </Col>
      </Row>
    </Container>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        // featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        date(formatString: "D MMM YYYY", locale: "IT")
        title
        description
        tags
        featuredimage
        author {
         id
         bio
         twitter
       }
      }
    }
  }

`