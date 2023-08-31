import React from 'react';
import Layout from '../components/Layout/Layout';
import Example from './Example';

const Homepage = () => {
  return (
    <Layout title={"Best Offers"}>
        <h1>home</h1>
        <Example/>
    </Layout>
  );
}

export default Homepage;
