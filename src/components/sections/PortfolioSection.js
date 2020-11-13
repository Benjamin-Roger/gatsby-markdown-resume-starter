import React from 'react';
import config from 'config';

import Portfolio from 'components/common/Portfolio/Portfolio';

const PortfolioSection = (props) => {


  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="portfolio"
    >
      <div className="w-100">
        <h2 className="mb-5">Projects and missions</h2>

        {config.portfolio.introParagraphs.map((paragraph, key) => (
          <p key={`portfolio_intro_${key}`}>{paragraph}</p>
        ))}

        <Portfolio {...props} />

      </div>
    </section>
  );
};

export default PortfolioSection;
