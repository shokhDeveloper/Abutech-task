import styled, {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
    *::before, *::after, *{
        box-sizing: border-box;
        user-select: none;
    }
    body{
        margin: 0;
        padding: 0;
    }
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 0 20px;
    }
`
