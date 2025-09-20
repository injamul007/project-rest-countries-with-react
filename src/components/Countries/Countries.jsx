import React, { use } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise)
  const {countries} = countriesData
  return (
    <div>
      <h2 style={{textAlign:'center'}}>In the Countries: {countries.length}</h2>
      <div className='countries'>
      {
        countries.map(country=> <Country key={country.cca3.cca3} 
          country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;