import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Baloo da 2', 'Roboto' ,sans-serif;
    position: relative;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(90, 90, 90);
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }
    /* ::-webkit-scrollbar {
        display: none;
    } */
  }
  html, body, #root {
    height: 100%;
    overflow: overlay;

  }
  body {
    font-size: 14px;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    /* overflow: overlay; */

  }
  ul {
    list-style: none;
  }
  ::placeholder {
    color: ${props => props.theme.colors.placeholder} !important;
    opacity: 1;
  }

`;
