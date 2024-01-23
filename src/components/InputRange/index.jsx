import {Howl} from 'howler';
import {useState, useEffect} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {InputRangeContainer, ShowInput} from './style';
import useIsMobile from '../../hooks/useisMobile';

function InputRange({itemName, action}) {
  const [sound, setSound] = useState();
  const [volume, setVolume] = useState(false);
  const [soundLoading, setSoundLoading] = useState(false);
  const [soundLoad, setSoundLoad] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [active, setActive] = useState(false);
  const [itemVolume, setItemVolume] = useState(0);
  const [itemVolumeOne, setItemVolumeOne] = useState(0);
  const baseUrl = `https://sonoro-api.netlify.app/static/`;
  const isMobile = useIsMobile(800);

  //let sound;

  useEffectOnce(() => {
    console.log('hola');
    setSound(
      new Howl({
        src: `${baseUrl}tracks/${itemName}.mp3`,
        loop: true,
        html5: true,
        autoplay: true,
        volume: 0.0,
        //onload: () => {
        //sound.play()
        //}
      }),
    );
  }, soundLoad);

  const handdleVolumen = e => {
    let volu = e.target.value;

    volu < 0.01 ? setActive(false) : setActive(true);

    console.log(active);
    console.log(volu);

    if (sound) {
      sound.volume(volu);
      setItemVolumeOne(volu);
    } else {
      console.log(volu);
      setItemVolumeOne(volu);
      setSoundLoad(true);
    }
  };

  const handleNotShowItemVolume = e => {
    //e.stopPropagation()
    //console.log(e.target === e.currentTarget)

    if (e.target === e.currentTarget) {
      setShowVolume(false);
    }

    setItemVolume(itemVolumeOne);
  };

  const handleShow = () => {
    console.log(sound);

    setSoundLoad(true);

    setShowVolume(true);
    if (!sound) {
    }
  };

  return (
    <>
      {showVolume && isMobile && (
        <ShowInput onClick={e => handleNotShowItemVolume(e)}>
          <div>
            <p>{itemName}</p>
            <input
              id={`id-${itemName}`}
              type="range"
              step="0.01"
              min="0"
              max="1"
              defaultValue={itemVolume}
              onChange={e => handdleVolumen(e)}
            />
          </div>
        </ShowInput>
      )}

      <InputRangeContainer onClick={handleShow} active={active}>
        <img
          src={`${baseUrl}icons/${itemName}.svg`}
          className="desktop-icon-input"></img>
        {!isMobile && (
          <div className="input">
            <span>{itemName}</span>
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
        )}
      </InputRangeContainer>

      {
        //<InputRangeContainer
        //id={itemName}
        //itemVolume={0}
        ////onClick={action}
        //onClick={() => handleShow()}>
        //<img
        //src={`${baseUrl}icons/${itemName}.svg`}
        //className="desktop-icon-input"></img>
        //<div className="input-general">
        //<div className="info-content">
        //{
        ////<span className="desktop-icon-input on-sound">{itemName} </span>
        //}
        //<span>
        //{showMessage ? (
        //<img src={`${baseUrl}on-sound.svg`} className="on-sound-icon" />
        //) : (
        //''
        //)}
        //</span>
        //</div>
        //<div className="input">
        //<input
        //id={`id-${itemName}`}
        //type="range"
        //step="0.01"
        //min="0"
        //max="1"
        //defaultValue='0'
        //onChange={e => handdleVolumen(e)}
        ///>
        //</div>
        //</div>
        //</InputRangeContainer>
      }
    </>
  );
}

export default InputRange;
