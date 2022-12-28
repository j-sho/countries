import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import Select, { components } from 'react-select';


function Search(props) {
  const [searchCountry, setState] = useState('');
  const handleChange = value => {
    setState(value);
    props.searchCountry(value);
  
  };

  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <SearchIcon />
        </components.DropdownIndicator>
      )
    );
  };

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? (props.theme === "Light" ? 'hsla(209, 23%, 22%, 10%)' : 'hsl(207, 26%, 17%)') : null,
        color:  props.theme === "Light" ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
      };
    },
    control: base => ({
        ...base,
        border: 0,
        boxShadow: "none",
        backgroundColor: props.theme === "Light" ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)', 
        color: props.theme === "Light" ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
      })
  };

    return (
      <Select 
      components={{ DropdownIndicator }}
      placeholder="Search for a country ..."
      options={props.options} 
      onChange={handleChange}
      isSearchable="true"
      isClearable
      isRtl="true"
      className="search_holder"
      styles={colourStyles}
      ></Select>
        )
};

export default Search;