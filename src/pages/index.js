import React from 'react';

import { graphql } from 'gatsby';

import Layout from 'components/common/Layout';
import Sidebar from 'components/common/Sidebar/Sidebar';
import {
  AboutSection,
  ExperienceSection,
  EducationSection,
  SkillSection,
  CertificationSection,
  PortfolioSection,
} from 'components/sections';

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <Sidebar />
    <div className="container-fluid p-0">
      <AboutSection bio={data.bio.edges[0].node.html} />

      <hr className="m-0" />

      {/* Experiences */}

      <ExperienceSection experiences={data.experiences.edges} />

      <hr className="m-0" />

      {/* Education */}

      <EducationSection education={data.education.edges} />

      <hr className="m-0" />

      {/* Skills */}

      <SkillSection />

      <hr className="m-0" />

      {/* Certifications */}

      <CertificationSection />

      <hr className="m-0" />

      <PortfolioSection portfolio={data.portfolio.edges} />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  fragment MarkdownContent on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          name
          title
          company
          url
          url_project
          position
          start_date
          end_date
          location
          flag_id
          lang
          categories
        }
        html
      }
    }
  }

  query HomepageQuery {

    bio:  allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___end_date }
      filter: { fileAbsolutePath: { regex: "/bio/" } }
    ) {
      ...MarkdownContent
    }

    experiences: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___end_date }
      filter: { fileAbsolutePath: { regex: "/experiences/" } }
    ) {
      ...MarkdownContent
    }

    education: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___end_date }
      filter: { fileAbsolutePath: { regex: "/education/" } }
    ) {
      ...MarkdownContent
    }

    portfolio: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___end_date }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      ...MarkdownContent
    }
  }
`;
