import React from 'react';

const EmployerWrapper = ({ company, url }) => (
  <h4 className="mr-2">
    {url ? (
      <a
        className="portfolio-link hover-link"
        href={url}
        title={company}
        alt={company}
        rel="nofollow"
      >
        {company}
      </a>
    ) : (
      <span className="portfolio-link text-color-primary hover-link">
        {company}
      </span>
    )}
  </h4>
);

export default EmployerWrapper;
