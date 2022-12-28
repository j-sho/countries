import React, { useState } from 'react';
import Select, { components } from 'react-select';

function Filter(props) {
  const regionList = [
    {value: "Africa", label: "Africa"}, 
    {value: "Americas", label: "Americas"}, 
    {value: "Asia", label: "Asia"},
    {value: "Europe", label: "Europe"},
    {value: "Oceania", label: "Oceania"}];
  const [region, setRegion] = useState("Find by Region");
  
  const handleChange = value => {
    setRegion(value);
    props.searchRegion(value);
  
  };

  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
        </components.DropdownIndicator>
      )
    );
  };

  const colourFilterStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? (props.theme === "Light" ? 'hsla(209, 23%, 22%, 10%)' : 'hsl(207, 26%, 17%)') : null,
        backgroundColor: isSelected ? (props.theme === "Light" ? 'hsla(209, 23%, 22%, 10%)' : 'hsl(207, 26%, 17%)') : null,
        backgroundColor: props.theme === "Light" ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)', 
        color: props.theme === "Light" ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
      }
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
    placeholder="Filter by Region"
    options={regionList} 
    onChange={handleChange}
    isSearchable="true"
    isClearable
    className="filter_holder"
    styles={colourFilterStyles}
    ></Select>
      )
}

export default Filter;
