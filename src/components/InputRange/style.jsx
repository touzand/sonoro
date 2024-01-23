import '../../index.css';
import styled, {css,keyframes} from 'styled-components';

const Loading = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
`;

export const InputRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 4px;
  //gap: 1rem;
  margin-bottom: 2rem;
  //width:200px;

  img {
    pointer-events: none;
    padding:2rem;
    border-radius:50%;
  border:solid medium #3a5ba025;
    transition:all 0.5s ease;
    ${props=>props.active && css`
  border:solid medium var(--second-color);
      `}

@media (min-width: 700px) {
  border-bottom:solid medium transparent;
}
  }

  .input-loading {
    background-color: red;
  }

  .loading {
    width: 19px;
    height: 19px;
    background-color: transparent;
    border: solid medium var(--second-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${Loading} 1s ease-in both infinite;
  }

  .desktop-icon-input {
    width: 60px;
    height: auto;
  }

  .mobile-icon-input {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem !important;
  }

  .input {
    //height: 40px;
    //padding: 6px 4px;
    background: #fcfcfc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    background-color: var(--primal-color);

    display:flex;
    flex-direction:column;

    span{
      margin-bottom:1rem;
      color:var(--second-color);
    }
  }

  .input input[type='range'] {
    -webkit-appearance: none !important;
    width: 100%;
    //width: 200px;
    height: 3px;
    //background: linear-gradient(
    //to right,
    //var(--second-color) 10%,
    //var(--primal-color) 10% 90%,
    //var(--second-color) 90% 100%
    //);
    //background: linear-gradient(
      //to right,
      //var(--second-color) 5%,
      //var(--primal-color) 5% 95%,
      //var(--second-color) 95% 100%
    //);
    
    background-color: var(--second-color);
    border: none;
    outline: none;
  }

  .input input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 20px;
    height: 30px;
    background-color: var(--second-color);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .input input[type='range']::-webkit-slider-thumb:hover {
    background-color: var(--second-color);
    cursor: grab;
  }

  .input input[type='range']::-webkit-slider-thumb:active {
    background-color: var(--second-color);
    cursor: grabbing;
  }

  .input-general {
    font-weight: unset;
    color: var(--second-color);

    span {
      margin: 0;
    }
  }

  .info-content {
    height: 1.5rem;
    display: flex;
    justify-content: left;
    gap: 0.5rem;

    span {
      text-transform: capitalize;
    }
  }

  .on-sound span img {
    width: 19px;
  }

  .on-sound-icon {
    width: 19px;
  }

  @media (min-width: 700px) {
    .input input[type='range'] {
      //width:70vw;
      width: 150px;
      //background: linear-gradient( to right,
        //var(--second-color) 10%,
        //var(--primal-color) 10% 90%,
        //var(--second-color) 90% 100%
      //);
    }

    img {
      width: 50px;
      height: auto;
      display: block;
    }

    .input {
      //width: 100px;
    }

    .mobile-icon-input {
      display: none;
    }

    .desktop-icon-input {
      //width: 60px;
      //heihgt: auto;
      display: block;
    }
  }
`;

export const ShowInput = styled.div`
    background-color:transparent;
    position:fixed;
    bottom:0rem;
    left:0rem;
    right:0rem;
top:0rem;
display:flex;
flex-direction:column;
align-items:normal;
justify-content:end;
padding:1rem;

  p{
    text-align:center;
  }

div{
    //height: 40px;
    padding: 2rem;
  padding-top:0;
  padding-bottom:2.5rem;
    background: #fcfcfc;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    background-color: var(--primal-color);
  border:solid medium var(--second-color);
  display:flex;
    flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;

  p{
    font-weight:bold;
    color:var(--second-color);
    font-size:1.5rem;
  }


  input[type="range"] {
    -webkit-appearance: none !important;
    width: 100%;
    //width: 200px;
    height: 3px;
    //background: linear-gradient(
    //to right,
    //var(--second-color) 10%,
    //var(--primal-color) 10% 90%,
    //var(--second-color) 90% 100%
    //);
    background-color:var(--second-color);
    //background: linear-gradient(
      //to right,
      //var(--primal-color) 5%,
      //var(--second-color) 5% 95%,
      //var(--primal-color) 95% 100%
    );
    border: none;
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 40px;
    height: 40px;
    background: var(--second-color);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--second-color);
    cursor: grab;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    background: var(--second-color);
    cursor: grab;
    cursor: grabbing;
  }


}
`;
