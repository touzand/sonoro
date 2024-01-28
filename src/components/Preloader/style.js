import styled, {keyframes} from 'styled-components'

const Fade = keyframes`
0%{display:flex}

100%{display:none;}
`

export const PreloaderContainer = styled.figure`
top:0;
bottom:0;
right:0;
left:0;
background-color:var(--second-color);
background-color:red;
z-index:3;
position:fixed;
margin:0;
display:flex;
justify-content:center;
align-items:center;
color:var(--primal-color);
font-size:4rem;
padding:1rem;

animation:${Fade} 3s ease both;
`
