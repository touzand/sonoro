import styled from "styled-components";

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
  display: flex;
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
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

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
      color: #3a5ba0;
    }

    span {
      text-align: center;
      color: #3a5ba0;
      font-weight: unset;
    }
  }

  img {
    height: 40px;
  }

  @media (min-width: 920px) {
    .sub-header {
      flex-direction: row;

      div {
        justify-content: end;
      }

      span {
        text-align: left;
      }
    }

    .mid-line {
      background-color: #3a5ba0;
      width: 2px;
      height: 100px;
    }
  }
`;
