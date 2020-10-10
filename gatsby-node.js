const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const authorsPage = path.resolve("src/templates/authors/index.js");

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              authorId
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    // Authors page
    createPage({
      path: `/authors/`,
      component: authorsPage
    });


    // Tag pages:
    let authorSet = []
    //// Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (edge.node.fields.authorId) {
        authorSet.add(edge.node.fields.authorId);
      }
    })
    // Eliminate duplicate tags
    authorSet = _.uniq(authorSet)

    // Make authors pages
    const authorList = Array.from(authorSet);
    authorList.forEach(author => {
      createPage({
        path: `/author/${_.kebabCase(author)}/`,
        component: authorPage,
        context: {
          authorId: author
        }
      });
    });
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'author')) {
    createNodeField({
      node,
      name: 'authorId',
      value: node.frontmatter.author,
    })
  }
}
