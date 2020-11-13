import React from 'react';

import {getCountry} from 'utils/getCountry';

const ResumeItemMetaData = ({ start_date, end_date, flag_id }) => (
  <div className="resume-date text-right float-right">
    <p className="text-primary">
      {start_date !== end_date ? start_date + ' - ' + end_date : start_date}
    </p>
    {flag_id
      ? flag_id.map((flag, key) => {
          const { longName, icon } = getCountry(flag);
          return (
            <img
              className="flag-icons ml-2 mb-2 shadow-sm rounded-circle"
              key={key}
              src={`/images/${icon}`}
              title={longName}
              alt={longName}
            />
          );
        })
      : ''}
  </div>
);

export default ResumeItemMetaData;
