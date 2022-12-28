import React, { Fragment, useEffect, useState } from 'react';
import CountryData from './CountryData';
import Filter from './Filter';
import Search from './Search';


function Home(props) {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [searchOption, setSearch] = useState({});
        const [searchCountryItem, setSearchCountry] = useState('');
        const [searchRegionItem, setSearchRegion] = useState('');
      
        useEffect(() => {
          fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
                addSearch(result);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, []);


        function addSearch(items) {
          const newArray = items.map(function(item) {
            return {value: item.name, label: item.name}
          })
          setSearch(newArray);
        }

        function searchCountry(value) {
          setSearchCountry(value);

        }

        function searchRegion(value) {
          setSearchRegion(value);

        }
 
        
    return (
    <Fragment>
    <section className="holder">
    <div className="search_filter_holder">

      <Search options = {searchOption}
        searchCountry = {searchCountry}
        theme={props.theme}
      />
      <Filter searchRegion = {searchRegion} theme={props.theme}/>
    </div>
    <div className="countries-list">
    {items.filter(function(item) {
      if(!searchRegionItem && !searchCountryItem) {
        return item;
      } else if (searchRegionItem) {
        if (item.region === searchRegionItem.value) {
          return item;
        }} else if (searchCountryItem) {
        if(item.name === searchCountryItem.value) {
          return item;
        }}
    })
    .map((item, index) => (
          <CountryData
          key={index}
          flag={item.flag}
          country={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
          />
        ))}
    </div>
    </section>

    </Fragment>
  )

    }

    
    

export default Home;