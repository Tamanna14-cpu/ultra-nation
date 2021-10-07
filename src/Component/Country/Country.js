import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const countryStyle = {border : '1px solid red', margin: '10px', padding : '10px'}
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style = {countryStyle}>
            <h4>This is {name}</h4>
            <img style = {{height : '40px'}} src= {flag} alt=""/>
            <p>population : {population}</p>
            <p><small>region : {region}</small></p>
            <button onClick = {() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;