import { Enlace, EnlacesContainer, FooterContainer, MadeBy } from "./style";

const Footer = () => {
  const baseUrl = "http://127.0.0.1:8000/static/others/";

  return (
    <FooterContainer>
      <div>
        <h3>Would you like to see more?</h3>
        <p>
          Visit my <b>github</b> or <b>portfolio</b> if you're interested in
          seeing more projects like this one
        </p>
        <EnlacesContainer>
          <Enlace href="https://touzand.github.io/portafolio" target="_blank">
            <img src={`${baseUrl}circle.svg`} alt="circle" />
            <p>Alan G. Alonso</p>
          </Enlace>
          <Enlace href="https://github.com/touzand/sonoro" target="_blank">
            <img src={`${baseUrl}github.svg`} alt="github" />
            <p>Github</p>
          </Enlace>
        </EnlacesContainer>
        <MadeBy className="desktop-only">Make by <a href='https://touzand.github.io/portafolio' target='_blank'>Alan G. Alonso</a> ( Touzand ) a few seconds ago</MadeBy>
      </div>
    </FooterContainer>
  );
};

export default Footer;
