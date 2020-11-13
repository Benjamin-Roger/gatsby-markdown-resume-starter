import React from 'react';

import UrlProjectButton from './UrlProjectButton';
import ResumeItemMetaData from './ResumeItemMetaData';
import EmployerWrapper from './EmployerWrapper';
import PortfolioCategories from './PortfolioCategories';


const PortfolioItem = ({
  name,
  company,
  url,
  url_project,
  categories,
  start_date,
  end_date,
  flag_id,
  children,
}) => (
  <div
    className={
      'resume-item portfolio-item mt-5 p-3 shadow-sm rounded ' +
      ( categories ? categories.map((category) => category.toLowerCase() + ' ') : '')
    }
  >
    <ResumeItemMetaData {...{ start_date, end_date, flag_id }} />

    <div className="resume-content pb-5 position-relative">
      <h3 className="mb-0">{name}</h3>
      <div className="mb-3 mt-1 d-flex flex-column">
        <EmployerWrapper {...{ company, url }} />

        <PortfolioCategories {...{ categories }} />
      </div>

      {children}

      <br />

      {url_project ? <UrlProjectButton {...{ url_project, name }} /> : ''}
    </div>
  </div>
);

export default PortfolioItem;
