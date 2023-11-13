import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default function Metadata({ title, description, keywords, children }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    // image: `${siteUrl}${image}`,
    // url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {/* <meta name="image" content={seo.image} /> */}
      {children}
    </>
  )
}
