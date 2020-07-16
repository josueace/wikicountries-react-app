import React from 'react';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

     <div className="container">
       <div className="row">
      <CountriesList/>

      <switch>
      <Route  path="/countries/:id" component={CountryDetail} />
      </switch>
    </div>
</div>
    </div>
  );
}

export default App;
