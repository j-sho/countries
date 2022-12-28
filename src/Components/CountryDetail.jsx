import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

function CountryDetail(props) {
    let history = useHistory();


    const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [countryDetails, setDetail] = useState([]);
        const [population, setPopulation] = useState('');
        const [currencies, setCurrencies] = useState([]);
        const [languages, setLanguages] = useState([]);
        const [borders, setBorders] = useState([]);
        
        
        useEffect(() => {
          fetch("https://restcountries.eu/rest/v2/name/" + props.match.params.name)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setDetail(result[0]);
                formatNumberWithCommas(result[0].population);
                currenciesHolder(result[0].currencies);
                languagesHolder(result[0].languages);
                return fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha3Code")
                .then(res => res.json()).then((resultName) => {
                    borderHolder(result[0].borders, resultName);
                })

              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, []);


    function backgroundImageStyle(list) {
        let image = 'url(' + list.countryDetails.flag + ')';
        return {
            backgroundImage: image,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '44%',
            height: '400px',
            borderRadius: '0',
        }
    }

    function formatNumberWithCommas(x) {
        setPopulation(() => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
    }

    function currenciesHolder(list) {
        setCurrencies(() => list.map((item, index) => (
            <span key={index}>{ (index ? ', ' : '') + item.name }</span>
        ))
        );
    }

    function languagesHolder(list) {
        setLanguages(() => list.map((item, index) => (
            <span key={index}>{ (index ? ', ' : '') + item.name }</span>
        )));
    }

    function borderHolder(bordersList, codesList) {
        const namesBorders = codesList.filter(item => {
            if(bordersList.includes(item.alpha3Code)) {
                return item.name;
            }});
        setBorders(() => namesBorders.map((item, index) =>(
            <span className="borders_item element" key={index}>{item.name}</span>
        )
        ))

    }



    return (
        <section className="holder">
        <div className="button_holder">
        <Button
        onClick={() => history.push(`/`)}
        boxShadow={3}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
        </div>
            <div className="country_detail_holder">
            <div className="flag-image" style={backgroundImageStyle({countryDetails})}></div>
            <div className="description_holder">
            <h2>{countryDetails.name}</h2>
            <div className="flex_detail_container">
            <div>
            <p>Native Name: <span>{countryDetails.nativeName}</span></p>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{countryDetails.region}</span></p>
            <p>Sub Region: <span>{countryDetails.subregion}</span></p>
            <p>Capital: <span>{countryDetails.capital}</span></p>
            </div>
            <div>
            <p>Top Level Domain: <span>{countryDetails.topLevelDomain}</span></p>
            <p>Currencies: {currencies}</p>
            <p>Languages: <span>{languages}</span></p>

            </div>
            </div>
            <div className="border_holder">
                <p>Border Countries: </p>
                {borders}
            </div>

            </div>
            </div>
        </section>
    );
}
export default CountryDetail;