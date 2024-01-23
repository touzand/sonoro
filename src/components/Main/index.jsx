import {useState} from 'react';
import InputRange from '../InputRange';
import GlobalVolume from '../GlobalVolume';
import {
  TrackContainer,
  Logo,
  MainBodyContainer,
  ToggleHandlerTheme,
  ShowInput,
} from './style';
import {trackNames} from './trackNames.js';
import {HiArrowDown} from 'react-icons/hi';
import {useContext} from 'react';
import {DarkThemeContext} from '../../context/ThemeContext';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';

function Main() {
  const {darkTheme, handdleDarkTheme} = useContext(DarkThemeContext);
  const [showItemVolume, setShowItemVolume] = useState(false);
  const [itemVolume, setItemVolume] = useState(0);
  const [itemName, setItemName] = useState('');

  const handleClickItem = (e) =>{
    console.log(e.target.id)

    setShowItemVolume(true)
    setItemName(e.target.id)

  }


  return (
    <div>
      <Logo>
        <div className="sub-header">
          <div>
            <a href="https://github.com/Touzand/sonoro" target="_blank">
              <img src="./favicon.svg" />
            </a>
            <h3>Sonoro</h3>
          </div>
          <article className="mid-line desktop-only"></article>
          <span>create your own sound environment in just a few seconds.</span>
          <ToggleHandlerTheme onClick={handdleDarkTheme}>
            {darkTheme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </ToggleHandlerTheme>
        </div>
      </Logo>
      <GlobalVolume />
      <MainBodyContainer>
        <TrackContainer>
          {trackNames.map((item, index) => (
            <InputRange itemName={item} key={index} action={handleClickItem}/>
          ))}
        </TrackContainer>
        {
          //showItemVolume && (
          //<ShowInput>
            //<input
              //id={`id-${itemName}`}
              //type="range"
              //step="0.01"
              //min="0"
              //max="1"
              //defaultValue="0"
              //onChange={e => handdleVolumen(e)}
            ///>
          //</ShowInput>
        //)
        }
      </MainBodyContainer>
    </div>
  );
}

export default Main;
