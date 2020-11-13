import React from 'react';
import {Link} from 'gatsby';


import Layout from 'components/common/Layout';

const Error404Page = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major text-center">
          <h2>
            Erreur 404
            <br />
            This page does not exist
          </h2>
          <Link href="/">Return to the homepage.</Link>
        </header>
      </section>
    </div>
  </Layout>
);

export default Error404Page;
