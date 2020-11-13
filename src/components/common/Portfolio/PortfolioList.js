import React from 'react';
import PortfolioItem from 'components/common/ResumeItem/PortfolioItem';

const PortfolioList = ({ portfolio, region, category }) => {
  var visiblePortfolio = portfolio
    .filter((project) =>
      category ? project.node.frontmatter.categories.includes(category) : true
    )
    .filter((project) =>
      region ? project.node.frontmatter.flag_id.includes(region) : true
    );

  return (
    <>
      {visiblePortfolio.length > 0 ? (
        visiblePortfolio.map((project, key) => (
          <>
            <PortfolioItem
              key={'portfolio-' + key}
              {...project.node.frontmatter}
            >
              <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
            </PortfolioItem>
            <hr />
          </>
        ))
      ) : (
        <p className="mt-4 text-center">No project in this country so far!</p>
      )}
    </>
  );
};

export default PortfolioList;
