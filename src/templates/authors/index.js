import React from 'react'

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => (
  <div>
    {authorNodes.map(({ node: author }, index) => (
      <a className="author" key={`author-${author.id}`} href={`/author/`+ author.id.toLowerCase().replace(/\s/g, '-')}>
        <div key={`author-${author.id}`}>{author.id}</div>
      </a>
    ))}
  </div>
)

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
          twitter
        }
      }
    }
  }
`