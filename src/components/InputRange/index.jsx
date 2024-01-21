import {Howl} from 'howler';
import {useState, useEffect} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {InputRangeContainer} from './style';

function InputRange({itemName}) {
  const [volume, setVolume] = useState(false);
  const [soundLoading, setSoundLoading] = useState(false);
  const [soundLoad, setSoundLoad] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const baseUrl = `http://127.0.0.1:8000/static/`;

  var sound;

  useEffectOnce(() => {
    sound = new Howl({
      src: `${baseUrl}tracks/${itemName}.mp3`,
      loop:true,
      onload:()=>{
        sound.play()
      }
    });
  }, soundLoad);

  const handdleVolumen = e => {
    setSoundLoad(true);

    if(sound){
    sound.volume(e.target.value)
    }
  };

  return (
    <InputRangeContainer>
      <img
        src={`${baseUrl}icons/${itemName}.svg`}
        className="desktop-icon-input"></img>
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
              ''
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
            onChange={e => handdleVolumen(e)}
          />
        </div>
      </div>
    </InputRangeContainer>
  );
}

export default InputRange;
