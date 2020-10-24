const _ = require('lodash')
const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post-contentful.js')
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
           # tags
           # publishDate(locale: "IT")
           # body {
           #   body
           # }
           # author {
           #   id
           #   name
           # }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = data.allContentfulBlogPost.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: post.node.slug,
        // tags: edge.node.tags,
        component: blogPost,
        context: {
          id,
          slug: post.node.slug,
          // title: post.node.slug,
          previous,
          next,
        },
      })
    })

    // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach((edge) => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach((tag) => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  })
}