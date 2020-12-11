import { Link } from 'gatsby'
import React from 'react'
import SEO from 'react-seo-component'
// import styled from 'styled-components'
// import { H2, Li, Ul } from '../components/page-elements'
// import {
//   Link,
//   linkHover,
//   linkStyle,
// } from '../components/shared-styles'
import { useSiteMetadata } from '../hooks/use-site-metadata'

// const Wrapper = styled.article`
//   min-height: 58vh;
//   a {
//     ${linkStyle};
//     ${linkHover};
//     text-decoration: none;
//   }
// `

export default ({ pageContext }) => {
  const {
    title: siteTitle,
    siteUrl,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  const { posts, tag } = pageContext
  // reverse order the posts this is
  // destructive as it mutates the array
  posts.reverse()
  return (
    <article>
      <SEO
        title={`Posts about ${tag}`}
        titleTemplate={siteTitle}
        description={`Posts about ${tag}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <h2>Posts about {tag}</h2>
      <ul>
        {posts.map(post => {
          const {
            id,
            fields: { slug },
            frontmatter: { title },
          } = post
          return (
            <li key={id}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
