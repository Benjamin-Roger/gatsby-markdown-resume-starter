import PortfolioFilter from './PortfolioFilter';
import PortfolioList from './PortfolioList';

import React from 'react';

const Portfolio = (props) => {
  const [filter, setFilterValues] = React.useState({
    category: '',
    region: '',
  });

  const updateFilter = (newFilter) => {
    setFilterValues({
      ...filter,
      ...newFilter,
    });
  };

  return (
    <>
      <PortfolioFilter
        region={filter.region}
        category={filter.category}
        updateFilter={updateFilter}
      />

      <div className="resume-item-wrapper">
        <PortfolioList {...props} {...filter} />
      </div>
    </>
  );
};

export default Portfolio;
