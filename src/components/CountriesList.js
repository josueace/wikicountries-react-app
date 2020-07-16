// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {

    
  return (
    <div class="col-5" >
            <div class="list-group">
              
            {countries.map(country=>{
                return <Link to={`/countries/${country.cca3}`}><p class="list-group-item list-group-item-action">{country.flag} {country.name.common}</p></Link>
                
            })}
            </div>
          </div>
  )
}

export default CountriesList;