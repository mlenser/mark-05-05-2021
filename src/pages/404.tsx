import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import H1 from '../components/Headings/H1';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO description="Page not found" title="Page not found" />
    <H1>Page not found</H1>
    <p>This page does not exist.</p>
  </Layout>
);

export default NotFoundPage;
