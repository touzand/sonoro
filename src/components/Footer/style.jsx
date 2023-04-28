import styled from "styled-components";
import "../../index.css";

export const FooterContainer = styled.footer`
  //margin-top: 3rem;
  background-color: var(--second-color);
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  gap: 5rem;
  padding: 2rem;
  padding-bottom: 0;
  color: var(--primal-color);
  position: relative;
  color: whitesmoke;

  img {
    mix-blend-mode: screen;
    width: 150px;
  }

  @media (min-width: 920px) {
    text-align: center;
    padding: 2rem;
  }
`;

export const EnlacesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: whitesmoke;
  }

  a:first-child {
    border-radius: 1rem 1rem 0 0;
    background-color: #202124;
  }

  img {
    width: 40px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    gap: 0.5rem;

    a:first-child {
      border-radius: 0.5rem;
      background-color: #202124;
    }
  }
`;

export const Enlace = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #24292d;
  gap: 0.5rem;
  color: whitesmoke;
  width: 100%;
  padding: 1rem;

  color: var(--primal-color);
  text-decoration: none;
  font-weight: bold;

  @media (min-width: 920px) {
    border-radius: 0.5rem;
    justify-content: center;
    width: auto;
    padding: 0.75rem;
  }
`;

export const MadeBy = styled.div`
  margin-top: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
