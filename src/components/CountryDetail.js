// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesDetail = (props) => {
    console.log(props)

    const getCountry = (id) => {
      const theCountry = oneCountry => {
        return oneCountry.cca3 === id;
      }
      return countries.find(theCountry);
    };
    
    const { params } = props.match;
    const foundCountry = getCountry(params.id);
     
    return (
        <div class="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
    <td>{foundCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  
                 {foundCountry.borders.map(code3=>{
                     const country= getCountry(code3);
    
                     return  <li><Link to={`/countries/${country.cca3}`}><p > {country.name.common}</p></Link></li>
                 })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
    
}

export default CountriesDetail;
/*

return (
    <div class="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%;">Capital</td>
<td>{foundCountry.capital[0]}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li><a href="/AND">Andorra</a></li>
             {foundCountry.borders.map(code3=>{
                 const country= getCountry(code3);

                 return  <li><a href={code3}>{country.name.common}</a></li>
             })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)
*/