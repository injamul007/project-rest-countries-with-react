import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise)
  const {countries} = countriesData
  return (
    <div>
      <h2>In the Countries: {countries.length}</h2>
    </div>
  );
};

export default Countries;