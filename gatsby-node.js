const Promise = require('bluebird')
const path = require('path')
// const _ = require('lodash')
// const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post-contentful.js')
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                id
                slug
                title
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          result.errors.forEach((e) => console.error(e.toString()))
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges

        posts.forEach((post, index) => {
          // const id = edge.node.id
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              // id,
              slug: post.node.slug,
              // previous,
              // next,
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
    )
  })
}