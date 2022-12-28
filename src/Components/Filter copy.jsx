import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import MuiSelect from "@material-ui/core/Select";
import { StylesProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import styled from "styled-components";

const Select = styled(MuiSelect)`
  .MuiMenu-paper {
    margin-top: 30px;
  }
`;

function Filter() {
    const regionList= ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [region, setRegion] = useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  
    return (
        <StylesProvider>
        <Paper component="form" className="filter_holder">
<TextField
          id="standard-full-width"
          select
          label="Filter by Region"
          value={region}
          InputLabelProps={{
            shrink: false,
          }}
          SelectProps={{
            MenuProps: {
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }
          }}
          
          onChange={handleChange}
        >
          {regionList.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        </Paper>
        </StylesProvider>
        )
};

export default Filter;