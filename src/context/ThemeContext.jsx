import { createContext, useState } from "react";

const DarkThemeContext = createContext();

const DarkThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handdleDarkTheme = () => {
    setDarkTheme(!darkTheme);

    if (!darkTheme) {
document.body.parentNode.style = '--primal-color: #03001C;--second-color: #3a5ba0;--third-color: #03001C;'
    } else {
document.body.parentNode.style = '--primal-color: #f3f2ef;--second-color: #3a5ba0;--third-color: #03001C;'
    }
  };

  const data = {
    darkTheme,
    handdleDarkTheme,
  };

  return (
    <DarkThemeContext.Provider value={data}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};

export { DarkThemeContext, DarkThemeProvider };
