import {useState, useEffect} from 'react';
import {PreloaderContainer} from './style';

const Preloader = () => {
  const [porcent, setPorcent] = useState(0);

  useEffect(() => {
    console.log('hola mundo');

    //const fakeInterval = setInterval(() => {
    //const newPorcent = porcent + 10;

    //setPorcent(newPorcent);
    //}, 500);

    const handleLoad = () => {
      const fakeLoad = setInterval(() => {
        setPorcent(prevPercentage => {
          // Incrementamos el porcentaje de carga hasta llegar al 100%.
          const newPercentage = prevPercentage + 10;
          // Si alcanzamos el 100%, limpiamos el temporizador.
          if (newPercentage >= 100) {
            clearInterval(fakeLoad);
          }
          return newPercentage;
        });
      }, 200); // Ajusta el temporizador según tus necesidades.

      // En este ejemplo, simulo el final de la carga después de 5 segundos.
      const fakeLoadEnd = setTimeout(() => {
        clearInterval(fakeLoad);
        setPorcent(100);
      }, 2000); // Ajusta el temporizador según tus necesidades.

      return () => {
        clearInterval(fakeLoad);
        clearTimeout(fakeLoadEnd);
      };
    };

    // Agrega un event listener para el evento 'load'.
    window.addEventListener('load', handleLoad);

    // Limpia el event listener cuando el componente se desmonta.
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <PreloaderContainer>
      <span>{porcent}%</span>
    </PreloaderContainer>
  );
};

export default Preloader;
