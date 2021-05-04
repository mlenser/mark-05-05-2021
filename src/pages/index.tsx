import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/headings/H1';
import Orderbook from '../components/Orderbook/Orderbook';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Orderbook" />
    <H1>Orderbook</H1>
    <Orderbook />
  </Layout>
);

export default IndexPage;
