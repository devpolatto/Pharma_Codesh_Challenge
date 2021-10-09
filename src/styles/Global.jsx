import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  
  :root{
        --background: #FEFCFF;
        --background-header: #FEFEFF;
        --Background-sidebar: #142A52;
        --color-icons: #64B899;
        --color-text: #404751;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: var(--background);
    }
    
    /* body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    } */
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;