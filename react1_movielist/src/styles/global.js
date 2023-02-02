import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';



const GlobalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
    }

    body {
        background-color: #22254b;
    }

    button {
        border: none;
    }
`;

export default GlobalStyles;
