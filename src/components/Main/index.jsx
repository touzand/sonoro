import {useState} from 'react';
import InputRange from '../InputRange';
import GlobalVolume from '../GlobalVolume';
import {
  TrackContainer,
  Logo,
  MainBodyContainer,
  ToggleHandlerTheme,
  ShowInput,
  Header,
} from './style';
import {trackNames} from './trackNames.js';
import {HiArrowDown} from 'react-icons/hi';
import {useContext} from 'react';
import {DarkThemeContext} from '../../context/ThemeContext';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import useIsMobile from '../../hooks/useisMobile';

function Main() {
  const {darkTheme, handdleDarkTheme} = useContext(DarkThemeContext);
  const [showItemVolume, setShowItemVolume] = useState(false);
  const [itemVolume, setItemVolume] = useState(0);
  const [itemName, setItemName] = useState('');
  const isMobile = useIsMobile(800);

  const handleClickItem = e => {
    console.log(e.target.id);

    setShowItemVolume(true);
    setItemName(e.target.id);
  };

  return (
    <div>
      {isMobile && (
        <Header>
          <Logo>
            <div className="sub-header">
              <div>
                <a href="https://github.com/Touzand/sonoro" target="_blank">
                  <img src="https://sonoro-api.netlify.app/static/others/sonoro.svg" />
                </a>
                <h3>Sonoro</h3>
              </div>
              <article className="mid-line desktop-only"></article>
              <span>
                create your own sound environment in just a few seconds.
              </span>
              {
                //<ToggleHandlerTheme onClick={handdleDarkTheme}>
                //{darkTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                //</ToggleHandlerTheme>
              }
            </div>
          </Logo>
          {
          //<GlobalVolume />
          }
        </Header>
      )}
      {!isMobile && (
          <>
          <Logo>
            <div className="sub-header">
              <div>
                <a href="https://github.com/Touzand/sonoro" target="_blank">
                  <img src="https://sonoro-api.netlify.app/static/others/sonoro-second.svg" />
                </a>
                <h3>Sonoro</h3>
              </div>
              <article className="mid-line desktop-only"></article>
              <span>
                create your own sound environment in just a few seconds.
              </span>
              {
                //<ToggleHandlerTheme onClick={handdleDarkTheme}>
                //{darkTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                //</ToggleHandlerTheme>
              }
            </div>
          </Logo>
            {
          //<GlobalVolume desktop={true}/>
            }
        </>
      )}
      <MainBodyContainer>
        <TrackContainer>
          {trackNames.map((item, index) => (
            <InputRange itemName={item} key={index} action={handleClickItem} />
          ))}
        </TrackContainer>
      </MainBodyContainer>
    </div>
  );
}

export default Main;
