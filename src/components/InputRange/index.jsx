import { Howl } from "howler";
import { useState, useEffect } from "react";
import { useEffectOnce } from "../../hooks/useEffectOnce";
import { InputRangeContainer } from "./style";

function InputRange({ itemName }) {
  const [volume, setVolume] = useState(false);
  const [soundLoading, setSoundLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const baseUrl = `http://127.0.0.1:8000/static/`;

  let sound;

  useEffectOnce(() => {
    if (volume) {
      sound = new Howl({
        src: `${baseUrl}tracks/${itemName}.mp3`,
        loop: true,
        volume: 0.5,
        autoplay: true,
        onload: () => {
          sound.play();
          console.log("Loaded...");
          setShowMessage(true);
        },
      });
    }
  }, volume);

  //useEffectOnce(() => {
  //if (showMessage) {
  //setSoundLoading(true);
  //}
  //}, showMessage);

  const handdleVolumen = (e) => {
    if (sound) {
      sound.volume(e.target.value);
    } else if (!sound) {
      setVolume(true);
    }
  };

  //className={soundLoading ? "input-loading" : ""}

  return (
    <InputRangeContainer>
      <img
        src={`${baseUrl}icons/${itemName}.svg`}
        className="desktop-icon-input"
      ></img>
      <div className="input-general">
        <div className="info-content">
          <span className="mobile-icon-input">
            <img
              src={`${baseUrl}icons/${itemName}.svg`}
              className="on-sound-icon"
            />
            {itemName}
          </span>
          <span className="desktop-icon-input on-sound">{itemName} </span>
          <span>
            {showMessage ? (
              <img src={`${baseUrl}on-sound.svg`} className="on-sound-icon" />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="input">
          <input
            id={`id-${itemName}`}
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue="0"
            onChange={handdleVolumen}
          />
        </div>
      </div>
    </InputRangeContainer>
  );
}

export default InputRange;
