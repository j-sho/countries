import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    
  }
  .element {
    background: ${({ theme }) => theme.element};
  }
  .input {
    background: ${({ theme }) => theme.input};
  }
  .button_modeChanger {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.element};
    border: none;
    text-transform: none;
    font-size: 0.95rem;
  }

  .country-holder {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.element};
  }

  .MuiPaper-root {
    background: ${({ theme }) => theme.element} !important;
  }

  .MuiIconButton-root {
    color: ${({ theme }) => theme.text} !important;

  }

  .MuiInputBase-root {
    color: ${({ theme }) => theme.text} !important;
  }

  .css-yk16xz-control
   {
    background: ${({ theme }) => theme.element} !important;
    color: ${({ theme }) => theme.text} !important;
  }

  .css-26l3qy-menu {
    background: ${({ theme }) => theme.element} !important;
    color: ${({ theme }) => theme.text} !important;
  }

.css-1wa3eu0-placeholder {
  color: ${({ theme }) => theme.text};
}

.css-1uccc91-singleValue  {
  color: ${({ theme }) => theme.text};
}

.MuiButton-contained {
  color: ${({ theme }) => theme.text} !important;
  background: ${({ theme }) => theme.element} !important;
}

.css-b8ldur-Input {
  color: ${({ theme }) => theme.text} !important;
}


  `
