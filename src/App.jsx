import Container from "./components/MasterContainer";
import {DarkThemeProvider} from "./context/ThemeContext";

function App() {
  return (
<div>
  <DarkThemeProvider>
        <Container/>
  </DarkThemeProvider>
    </div>
  );
}

export default App;
