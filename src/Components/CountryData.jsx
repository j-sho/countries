import React from 'react';
import { useHistory } from "react-router-dom";

function CountryData(props) {

    let history = useHistory();

    function backgroundImageStyle(props) {
        let image = 'url(' + props.flag + ')';
        return {
            backgroundImage: image,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }

    function formatNumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="country-holder" onClick={() => history.push(`/country/${props.country}`)}>
        <div className="flag-image" style={backgroundImageStyle(props)}></div>
        <div className="country-data">
            <h3>{props.country}</h3>
            <p>Population: <span>{formatNumberWithCommas(props.population)}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Capital: <span>{props.capital}</span></p>
        </div>
        </div>
    );
}
export default CountryData;