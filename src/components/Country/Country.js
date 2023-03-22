import React from 'react';
import './Country.css'

const Country = props => {
    // console.log(props);
    const { name, area, population, flags } = props.country;
    return (
        <div className='country-card'>
            <img src={flags.png} alt="" width={"100%"} height={"200px"} />
            <div style={{"margin": "20px"}}>
                <h3 className='card-title'>{name.common}</h3>
                <p className='card-description'>Population: {population}</p>
                <p className='card-description'>Area: {area}</p>
            </div>
        </div>
    );
};

export default Country;