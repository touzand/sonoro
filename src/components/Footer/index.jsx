import {FooterContainer, Links} from './style';
import {FaGithub, FaCircle} from 'react-icons/fa';

const Footer = () => {
  const BaseUrlOthers = 'https://sonoro-api.netlify.app/static/others/';

  return (
    <FooterContainer>
      <figure>
        <div>
          <article>
            <figure>
              <img src={BaseUrlOthers + 'sonoro.svg'} />
            </figure>
            Sonoro
          </article>
          <article>
            <p>constantly working to offer you a better experience</p>
          </article>
        </div>

        <div>
          <Links>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaCircle />
            </a>
          </Links>
          <p>
            Build by <a href="https://alan-ptf.netlify.app">Alan G. Alonso</a> A
            few seconds ago
          </p>
        </div>
      </figure>
    </FooterContainer>
  );
};

export default Footer;
