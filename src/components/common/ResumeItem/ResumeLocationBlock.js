import React from 'react';

const ResumeLocation = ({ url, company, location }) => (
  <p className="subheading mb-3">
    <a className="subheading hover-link" rel="nofollow" href={url}>
      {company}
    </a>
    {` - `}
    <span>{location}</span>
  </p>
);

export default ResumeLocation;
