import InputRange from "../InputRange";
import GlobalVolume from "../GlobalVolume";
import { TrackContainer, Logo, MainBodyContainer, ToggleHandlerTheme } from "./style";
import { trackNames } from "./trackNames.js";
import {HiArrowDown} from 'react-icons/hi'
import {useContext} from "react";
import {DarkThemeContext} from "../../context/ThemeContext";
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'

function Main() {
const {darkTheme,handdleDarkTheme} = useContext(DarkThemeContext)


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
      <ToggleHandlerTheme onClick={handdleDarkTheme}>{darkTheme ? <BsFillSunFill/> : <BsFillMoonStarsFill/> }</ToggleHandlerTheme>
        </div>
      </Logo>
      <GlobalVolume />
      <MainBodyContainer>
        <TrackContainer>
          {trackNames.map((item, index) => (
            <InputRange itemName={item} key={index} />
          ))}
          </TrackContainer>
          <div className="scroll-side-line">
            <div className="scroll-down-message">
            <p>Scroll down</p>
            <HiArrowDown/>
            </div>
          </div>
      </MainBodyContainer>
    </div>
  );
}

export default Main;
