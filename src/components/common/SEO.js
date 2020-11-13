import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  meta,
  image: metaImage_org,
  title,
  pathname,
  lang
}) {
  // Get the data for SEO
  const data = useStaticQuery(
    graphql`
      {
        SEO: site {
          siteMetadata {
            author
            description 
            siteUrl
            title
            defaultLanguage
          }
        }

        cv:imageSharp(fluid: {originalName: {eq: "cv_picture.jpg"}}) {
          fluid {
            ...GatsbyImageSharpFluid
            presentationWidth
            presentationHeight
          }
        }
      }
    `
  )

  const SEOData = data.SEO.siteMetadata;;
  const metaDescription = description || SEOData.description;
  const metaImage = metaImage_org || data.cv.fluid;

  lang = lang || SEOData.defaultLanguage;

  const image =
    metaImage && metaImage.src ? `${SEOData.siteUrl}${metaImage.src}` : null
  const canonical = pathname ? `${SEOData.siteUrl}${pathname}` : null
  return (
    <Helmet

      htmlAttributes={{
        lang:lang,
      }}

      title={title}
      titleTemplate={`%s | ${SEOData.title}`}

      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: SEOData.author, //return author name
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: SEOData.siteUrl,
        },
        {
          name: `twitter:creator`,
          content: SEOData.author,
        },
        {
          name: `twitter:title`,
          content: SEOData.author, //return author name
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: SEOData.siteUrl,
        },
        {
          name: `twitter:image`,
          content: image,
        }
      ]
        .concat(
          metaImage
            ? [
              {
                property: "og:image",
                content: image,
              },
              {
                property: "og:image:width",
                content: metaImage.presentationWidth,
              },
              {
                property: "og:image:height",
                content: metaImage.presentationHeight,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
            : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string,
}
export default SEO
