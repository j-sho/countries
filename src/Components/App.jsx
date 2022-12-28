
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { darkTheme, lightTheme } from '../theme';
import CountryDetail from './CountryDetail';
import Header from './Header';
import Home from './Home';


function App() {

        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        const [theme, setTheme] = useState('Light');
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

        function changeMode(mode) {
            setTheme(mode);

        }

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
      <Router>
      
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
    <Header onChangeMode={changeMode}/>
    <Switch>
    <Route
  path='/'
  exact
  render={(props) => (
    <Home {...props} theme={theme} />
  )}
/>
    <Route path="/country/:name"  
    render={(props) => (
    <CountryDetail {...props}/>
  )}

  />
  </Switch>
  </>
    </ThemeProvider>
    </Router>)
};

    
    

export default App;