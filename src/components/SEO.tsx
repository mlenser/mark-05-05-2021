import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  description?: string;
  lang?: string;
  meta?: Object[];
  title: string;
};

const SEO: React.FC<Props> = ({
  description,
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate =
    title === site.siteMetadata.title
      ? site.siteMetadata.title
      : `%s | ${site.siteMetadata.title}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: site.siteMetadata.author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
        ...meta,
      ]}
      title={title}
      titleTemplate={titleTemplate}
    />
  );
};

export default SEO;
