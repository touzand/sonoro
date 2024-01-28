import styled, {css,keyframes} from 'styled-components';
import '../../index.css';

const Slide = keyframes`
0%{left:0%;}
80%{left:100%;}
100%{
left:100%;
  visibility:hidden;
  display:none;
}
`

const SpanUp = keyframes`
0%{opacity:0;top:1rem}
100%{opacity:1;top:0rem}
`;

const IconsUp = keyframes`
0%{opacity:0;transform:rotate(90deg)}
100%{opacity:1;transform:rotate(0deg)}
`;

export const AllowContainer = styled.div`
  position: fixed;
  z-index:2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left:0; 
  bottom: 0;
  right: 0;
  background-color: var(--second-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primal-color);
  display: flex;
  flex-direction: column;
  cursor: pointer;

${props=>props.hide && css`
  animation:${Slide} 2s ease both;
  `}


  img {
    width: 100px;
  }

  * {
    pointer-events: none;
  }

div{

  h4{
  position:relative;
    //animation:${SpanUp} 1s ease;
  animation-name:${SpanUp};
    animation-duration:1s;
    //animation-delay:1s;
    animation-timing-function:ease;
    animation-fill-mode:both;
    //top:rem;
    opacity:0;
  }

  img{
    animation:${IconsUp} 1s .5s ease both;
    transition:all ease 1s;
    opacity:0;
  }
}

div:nth-child(1){
  h4{
    animation-delay:.5s;
  }
}

div:nth-child(3){
  h4{
    animation-delay:.8s;
  }
}
`;
