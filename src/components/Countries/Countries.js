import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

// To add Styles in  the main page
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(resp => resp.json())
        .then(data => setCountries(data))
    } 
    
    ,[])
    
    return (
        <div className='main-container'>
            {/* : Each child in a list should have a unique "key" prop. So sending a unique key as props is important */}
            <h1>All Countries Information</h1>
            <h3>Available Countries: {countries.length}</h3>

            <div className="country-container">
            {
                countries.map(country => <Country country={country} key={country.cca3}></Country>)  //will send the whole country object
            }
            </div>
           
        </div>
    );
};

export default Countries;