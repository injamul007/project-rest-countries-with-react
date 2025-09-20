import React, { useState } from 'react';
import Currency from '../Currency/Currency';
import "./Country.css"

const Country = ({country}) => {
  const [isVisited, setIsVisited] = useState(false)

  const handleState = () => {
    setIsVisited(!isVisited)
  }
  // console.log(country)
  const currenciesObj = country.currencies.currencies;
  const currencies = Object.entries(currenciesObj)
  return (
    <div className='country'>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt?.slice(0,50)} />
      <h2>Name: {country.name.common}</h2>
      <h3>Official: {country.name.official}</h3>
      <h3>Capital: {country.capital.capital[0]? country.capital.capital[0] : 'No Capital'}</h3>
      <p>Area: {country.area.area} - {country.area.area>300000? "Big Country":"Small Country"}</p>
      <p>CCN3 Code: {country.ccn3.ccn3}</p>
      <p>CCA3 Code: {country.cca3.cca3}</p>
      <p>Region: {country.region.region}</p>
      {
        currencies.map(currency=> <Currency key={currency[1].name} currency={currency}></Currency>)
      }
      <p>Population: {country.population.population}</p>
      <p>Continents: {country.continents.continents[0]}</p>
      <button onClick={handleState}>{isVisited? 'Visited':'Not Visited'}</button>
    </div>
  );
};

export default Country;