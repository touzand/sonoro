import "../../index.css";
import styled, { keyframes } from "styled-components";

const Loading = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
`;

export const InputRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 50px;
  padding: 6px 4px;
  gap: 1rem;
  margin-bottom: 2rem;

  .input-loading{
  background-color:red;
  }

  .loading {
    width: 19px;
    height: 19px;
    background-color: transparent;
    border: solid medium var(--second-color);
    border-bottom-color: transparent;
  border-radius:50%;
  box-sizing:border-box;
    animation: ${Loading} 1s ease-in both infinite;
  }

  .desktop-icon-input {
    //width: 60px;
    //heihgt: auto;
    display: none;
  }

  .mobile-icon-input {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem !important;
  }

  .input {
    height: 40px;
    padding: 6px 4px;
    background: #fcfcfc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    background-color: var(--second-color);
    width: 80vw;
  }

  .input input[type="range"] {
    -webkit-appearance: none !important;
    width: 100%;
    //width: 200px;
    height: 2px;
    //background: linear-gradient(
    //to right,
    //var(--second-color) 10%,
    //var(--primal-color) 10% 90%,
    //var(--second-color) 90% 100%
    //);
    background: linear-gradient(
      to right,
      var(--second-color) 5%,
      var(--primal-color) 5% 95%,
      var(--second-color) 95% 100%
    );
    border: none;
    outline: none;
  }

  .input input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 40px;
    height: 40px;
    background: var(--primal-color);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .input input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--primal-color);
    cursor: grab;
  }

  .input input[type="range"]::-webkit-slider-thumb:active {
    background: var(--primal-color);
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
    .input input[type="range"] {
      //width:70vw;
      width: 200px;
      background: linear-gradient(
        to right,
        var(--second-color) 10%,
        var(--primal-color) 10% 90%,
        var(--second-color) 90% 100%
      );
    }

    img {
      width: 50px;
      heihgt: auto;
      display: block;
    }

    .input {
      width: 200px;
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