import Button from '@material-ui/core/Button';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import React, { useEffect, useState } from 'react';


function Header(props) {
  const [mode, setMode] = useState("Light");
  
  function changeMode() {
      setMode((oldValue) => oldValue === "Light" ? "Dark" : "Light");
  };

  useEffect(() => {
    props.onChangeMode(mode);
  }, [props, mode]);
  
    return (
        <header className="element">
        <section className="holder">
            <h1 className="app_heading">Where in the world?</h1>
            <Button className="button_modeChanger" 
    id={mode} 
    onClick={changeMode} 
    variant="outlined" 
    startIcon={mode === "Light" ? <Brightness7Icon /> : <NightsStayIcon />}
    >
    {mode} Mode
    </Button>
    </section>
    </header>)
};

export default Header;