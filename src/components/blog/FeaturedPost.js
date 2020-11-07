import React from 'react'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import style from './blog.module.css'

// class FeaturedPost extends React.Component {
const FeaturedPost = ({ data }) => {
  // const { data } = this.props
  if (data){
    const { edges: posts } = data
    console.log (posts)
  }
  console.log (data)
  return (
    <h3>fai cacare {data}</h3>
  )
  // return (
  //   <div id="featured-posts">
  //     {posts &&
  //       posts.map(({ node: post }) => (
  //         <Link className={style.link} to={post.slug} key={post.id}>
  //           <article className={style.featuredPost}>
  //             <p className={style.data}>
  //               <span className={style.day}>
  //                 {post.giorno} <br />
  //               </span>
  //               {post.meseanno}
  //               </p>
  //             <div className="content">
  //               <h2>{post.title}</h2>
  //               <p className={style.subtitle}>
  //                 <span className="autore">
  //                   <span className="transparent">Autore: </span>
  //                   {post.author.name}
  //                 </span>
  //                 {/* <span className="transparent">
  //                     <span className={style.space}>/</span> 
  //                     Tempo di lettura:{' '}{post.timeToRead} min
  //                   </span> */}
  //               </p>
  //               <p>{post.excerpt}</p>
  //             </div>
  //           </article>
  //         </Link>
  //       ))}
  //   </div>
  // )
}

export default FeaturedPost;

// export const pageQuery = graphql`
//   {
//     allContentfulBlogPost
//     # (
//       # filter: { postInEvidenza: { eq: true }, node_locale: { eq: "it" } }
//       # sort: { order: DESC, fields: publishDate }
//     #) 
//     {
//       edges {
//         node {
//           id
//           slug
//           riassunto
//           publishDate
//           title
//           meseanno: publishDate(formatString: "MMM YYYY", locale: "IT")
//           giorno: publishDate(formatString: "DD", locale: "IT")
//           author {
//             name
//             id
//           }
//           heroImage {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allContentfulBlogPost(filter: {postInEvidenza: {eq: true}, node_locale: {eq: "it"}}, sort: {order: DESC, fields: publishDate}) {
      edges {
        node {
          id
          slug
          riassunto {
            riassunto
          }
          publishDate
          title
          meseanno: publishDate(formatString: "MMM YYYY", locale: "IT")
          giorno: publishDate(formatString: "DD", locale: "IT")
          author {
            name
            id
          }
        }
      }
    }
  }
`
