// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql, StaticQuery } from 'gatsby'
// import style from './blog.module.css'

// class FeaturedPost extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//       <div id="featured-posts">
//         {posts &&
//           posts.map(({ node: post }) => (
//             <Link className={style.link} to={post.fields.slug} key={post.id}>
//               <article className={style.featuredPost}>
//                 <p className={style.data}>
//                   <span className={style.day}>
//                     {post.frontmatter.giorno} <br />
//                   </span>
//                   {post.frontmatter.meseanno}
//                 </p>
//                 <div className="content">
//                   <h2>{post.frontmatter.title}</h2>
//                   <p className={style.subtitle}>
//                     <span className="autore">
//                       <span className="transparent">Autore: </span>
//                       {/* {post.frontmatter.author} */}Ezio
//                     </span>
//                     <span className="transparent">
//                       {/* <span className={style.space}>/</span>  */}
//                       Tempo di lettura:{' '}{post.timeToRead} min
//                     </span>
//                   </p>
//                   <p>{post.excerpt}</p>
//                 </div>
//               </article>
//             </Link>
//           ))}
//       </div>
//     )
//   }
// }

// FeaturedPost.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query FeaturedPostQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: {
//             frontmatter: {
//               featuredpost: { eq: true }
//               templateKey: { eq: "blog-post" }
//             }
//           }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 190)
//               id
//               timeToRead
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 meseanno: date(formatString: "MMM YYYY", locale: "IT")
//                 giorno: date(formatString: "DD", locale: "IT")
//                 featuredpost
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <FeaturedPost data={data} count={count} />}
//   />
// )
