import React from 'react';

import ResumeLocationBlock from './ResumeLocationBlock';
import ResumeItemMetaData from './ResumeItemMetaData';

const ResumeItem = ({
  name,
  company,
  url,
  position,
  start_date,
  end_date,
  location,
  flag_id,
  children,
}) => (
  <div className="resume-item mb-5">
    <ResumeItemMetaData {...{ start_date, end_date, flag_id }} />

    <div className="resume-content">
      <h3 className="mb-0">{position}</h3>

      <ResumeLocationBlock {...{ url, company, location }} />

      {children}
    </div>
  </div>
);

export default ResumeItem;
