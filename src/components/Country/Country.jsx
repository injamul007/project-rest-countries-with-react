import React, { useState } from 'react';
import Currency from '../Currency/Currency';
import "./Country.css"

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
  const [isVisited, setIsVisited] = useState(false)

  const handleState = () => {
    setIsVisited(!isVisited)
    handleVisitedCountries(country)
  }
  // console.log(country)
  const currenciesObj = country.currencies.currencies;
  const currencies = Object.entries(currenciesObj)
  return (
    <div className={`country ${isVisited && 'country_visited'}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt?.slice(0,50)} />
      <h2>Name: {country.name.common}</h2>
      <h3>Official: {country.name.official}</h3>
      <h3>Capital City: {country.capital.capital[0]? country.capital.capital[0] : 'No Capital'}</h3>
      <p>Area: {country.area.area} - {country.area.area>300000? "Big Country":"Small Country"}</p>
      <p>Region: {country.region.region}</p>
      {
        currencies.map(currency=> <Currency key={currency[1].name} currency={currency}></Currency>)
      }
      <p>Population: {country.population.population}</p>
      <p>Continents: {country.continents.continents[0]}</p>
      <button style={{marginRight:'20px'}} onClick={handleState}>{isVisited? 'Visited':'Not Visited'}</button>
      <button onClick={()=>handleVisitedFlags(country?.flags?.flags?.png)}>Add Visited Flag</button>
    </div>
  );
};

export default Country;