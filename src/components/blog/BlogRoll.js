// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql, StaticQuery } from 'gatsby'
// import style from './blog.module.css'

// const BlogRoll = ({ data }) => {
//   // const { data } = this.props
//   const { edges: posts } = data.allContentfulBlogPost
//   console.log(data);

//   return (
//     <div id="blog-post-list">
//       {posts &&
//         posts.map(({ node: post }) => (
//           <Link key={post.id} className={style.link} to={post.slug}>
//             {console.log(post.id)}
//             <article className={style.blogPost}>
//               <h3 className={style.title}>{post.title}</h3>
//               <p className={style.subtitle}>  
//                   {post.date}
//                   <span className="transparent">
//                     <span className={style.space}> /</span>
//                   </span>
//                   <span className="transparent">Autore: </span>
//                   {post.frontmatter.author}Ezio
//                   <span className="transparent">
//                     <span className={style.space}>/</span> 
//                     Tempo di lettura:{' '}
//                   </span>
//                   {post.timeToRead} min{' '}
//                 </p>
//               <p className={style.excerpt}>{post.excerpt}</p>
//             </article>
//           </Link>
//         ))}
//     </div>
//   )
// }

// export default BlogRoll;

// export const pageQuery = graphql`
//   {
//     allContentfulBlogPost {
//       edges {
//         node {
//           id
//           slug
//           title
//           tags
//           publishDate(locale: "IT")
//           body {
//             body
//           }
//           author {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `
