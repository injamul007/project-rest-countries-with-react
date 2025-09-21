import React, { use, useState, } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlag, setVisitedFlag] = useState([])
  
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlag, flag]
    setVisitedFlag(newVisitedFlags)
  }

  const countriesData = use(countriesPromise)
  const {countries} = countriesData
  return (
    <div>
      <h2 style={{textAlign:'center'}}>In the Countries: {countries.length}</h2>
      <h3 style={{textAlign:'center'}}>Total Countries You Visited: {visitedCountries.length}</h3>
      <h3 style={{textAlign:'center'}}>Total Flags Visited: {visitedFlag.length}</h3>
      <ol>
        {
          visitedCountries.map((country, index) => <li key={index}>{country.name.common}</li>)
        }
      </ol>

      <div className='visited_flag_container'>
        {
          visitedFlag.map((flag,index) => <img key={index} src={flag}></img>)
        }
      </div>

      <div className='countries'>
      {
        countries.map(country => <Country key={country.cca3.cca3}
          country={country}
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlags={handleVisitedFlags}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;