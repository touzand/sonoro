import styled from "styled-components";

export const Header = styled.header`
background-color:var(--second-color);
padding:1rem;
margin:.5rem;
margin-bottom:2rem;
border-radius:.5rem;

*,p,span,svg,img{
color:var(--primal-color) !important;
}
`
 
export const ShowInput = styled.div`
position:fixed;
bottom:1rem;
left:1rem;
right:1rem;

    height: 40px;
    padding: 6px 4px;
    background: #fcfcfc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    background-color: red;

  input[type="range"] {
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

`

export const ToggleHandlerTheme = styled.button`
  border:none;
  color: var(--second-color);
  padding:.5rem;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:transparent;
  cursor:pointer;
  font-size:1.5rem;
  position:relative;
  margin-top:2rem;
  border:solid thin transparent;

  &:hover{
  border:solid thin var(--second-color);
  }

  @media (min-width: 700px) {
  position:fixed;
  top:.5rem;
  right:.5rem;
  margin-top:0rem;
  }
`;

export const MainBodyContainer = styled.div`
  display:flex;
justify-content:center;

  .scroll-side-line{
    background-color:var(--second-color);
    width:100%;
    height:auto;
    border-radius:.5rem 0 0 0;
    //padding-top:1rem;

    .scroll-down-message{
      display:flex;
      align-items:center;
      flex-direction:column;
      color:var(--primal-color);
      position:sticky;
      top:0rem;
      //opacity:.5;
      height: 100px;
  }

    p{
      text-align:center;
      font-weight:bold;
      transform: rotate(-0.25turn);
  }

    @media (min-width: 700px) {
    display:none;
  }
`;

export const TrackContainer = styled.div`
  display: grid;
    grid-template-columns: 200px 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0.25rem;

  @media (min-width: 700px) {
    max-width: 700px;
    min-width: auto;
    margin: auto;
    display: grid;
    justify-content: center;
    //grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    grid-template-columns: 200px 200px 200px;
    gap:2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: 2rem;

  & div,
  span {
    width: 200px;
  }

  .sub-header {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: #2d64e3;
    }

    span {
      text-align: center;
      color: #2d64e3;
      font-weight: unset;
    }
  }

  img {
    height: 40px;
  }

  @media (min-width: 920px) {
  
    margin-top:2rem;

    .sub-header {
      flex-direction: row;

      div {
        justify-content: end;
      }

      span {
        text-align: left;
        font-weight:bold;
      }
    }

    .mid-line {
      background-color: #2d64e3;
      width: 2px;
      height: 100px;
    }
  }
`;


