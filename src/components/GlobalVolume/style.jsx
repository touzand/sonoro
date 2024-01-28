import styled,{css} from "styled-components";

export const GlobalVolumeContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 6px 4px;
  gap: 1rem;
  //margin-bottom: 2rem;
  margin:4rem 0;

  img {
    width: 60px;
    heihgt: auto;
  }

  span{
    color:var(--second-color);
    margin-bottom:.5rem;
  }

  .input {
    height: 40px;
    padding: 6px 4px;
    background: #fcfcfc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    background-color:transparent;
  }
  .input input[type="range"] {
    -webkit-appearance: none !important;
    width: 200px;
    height: 2px;
    background-color:var(--primal-color);
    ${props=>props.desktop && css`
    background-color:var(--second-color);
      `}
    //background: linear-gradient(
      //to right,
      //var(--second-color) 10%,
      //var(--second-color) 10% 90%,
      //var(--second-color) 90% 100%
    //);
    border: none;
    outline: none;
  }

  .input input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 40px;
    height: 40px;
    //background: var(--second-color);
    background-color:var(--primal-color);
    ${props=>props.desktop && css`
    background-color:var(--second-color);
      `}
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .input input[type="range"]::-webkit-slider-thumb:hover {
    //background: var(--second-color);
    background-color:var(--primal-color);
    ${props=>props.desktop && css`
    background-color:var(--second-color);
      `}
    cursor: grab;
  }

  .input input[type="range"]::-webkit-slider-thumb:active {
    //background: var(--second-color);
    background-color:var(--primal-color);
    ${props=>props.desktop && css`
    background-color:var(--second-color);
      `}
    cursor: grabbing;
  }

  .input-general {
    font-weight: bold;
    color: var(--second-color);
`;
