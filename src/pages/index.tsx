import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/headings/H1';
import Orderbook from '../components/Orderbook/Orderbook';

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <H1>{data.site.siteMetadata.title}</H1>
    <Orderbook />
  </Layout>
);

export const query = graphql`
  query {
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
