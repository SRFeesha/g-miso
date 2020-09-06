import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/blog/Content";
import style from "./blog-post.module.css";
import { Container, Row, Col } from "react-grid-system";
import Spacer from "../components/Spacer";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  author,
  date,
  timeToRead,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || ""}
      <header className={style.header}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.subtitle}><span className="transparent">
          Autore: {author}
          <span className={style.space}>/</span>
          Pubblicato il:{" "}{date}
          <span className={style.space}>/</span> 
          Tempo di lettura:{" "}{timeToRead} min
        </span></p>
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
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  author: PropTypes.string,
  // date: PropTypes.instanceOf(Date),
  date: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        timeToRead={post.timeToRead}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
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
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

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
        author
        tags
      }
    }
  }
`;
