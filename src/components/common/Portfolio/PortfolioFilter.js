import React from 'react';
import config from 'config';

const PortfolioFilter = ({ updateFilter }) => {
  return (
    <div className="mt-5 portfolio-controls d-flex flex-column flex-md-row">
      <select
        className="category-select form-control flex-1 m-2 ml-0 ml-md-0 "
        onChange={(e) =>
          updateFilter({
            category: e.target.value,
          })
        }
      >
        <option value="">All project types</option>
        {config.portfolio.categories.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        className="country-select form-control flex-1 m-2 ml-0 ml-md-2"
        onChange={(e) =>
          updateFilter({
            region: e.target.value,
          })
        }
      >
        <option value="">All countries</option>

        {config.countriesArray.map((country, key) => (
          <option key={country.id} value={country.id}>
            {country.longName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PortfolioFilter;
