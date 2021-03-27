import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #FFFCE9;
    color: #3a3a37;
    font-family: 'Source Sans Pro', sans-serif;
}

h1 {
    font-family: 'New Tegomin', serif;;
}
`

export default GlobalStyles;