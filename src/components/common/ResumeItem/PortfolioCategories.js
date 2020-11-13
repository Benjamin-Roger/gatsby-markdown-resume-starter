import React from 'react';

const PortfolioCategories = ({ categories }) => (
  <span>
    {' '}
    {categories
      ? categories.map((category) => (
          <span
            key={`${category}`}
            className={
              'small rounded text-white p-1 mt-1 mb-1 ml-0 mr-2 px-3 d-inline-block ' +
              (category === 'Consulting' ? 'bg-primary' : 'bg-orange')
            }
          >
            {category}
          </span>
        ))
      : ''}
  </span>
);

export default PortfolioCategories;
