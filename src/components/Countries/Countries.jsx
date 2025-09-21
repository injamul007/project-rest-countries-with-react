import React, { use, useState, } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries)
  }

  const countriesData = use(countriesPromise)
  const {countries} = countriesData
  return (
    <div>
      <h2 style={{textAlign:'center'}}>In the Countries: {countries.length}</h2>
      <h3 style={{textAlign:'center'}}>Total Countries You Visited: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)
        }
      </ol>
      <div className='countries'>
      {
        countries.map(country=> <Country key={country.cca3.cca3}
          country={country}
          handleVisitedCountries={handleVisitedCountries}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;