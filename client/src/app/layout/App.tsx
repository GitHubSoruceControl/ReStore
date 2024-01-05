import Catalog from "../../feature/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode:paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
 
  return (
    
    <ThemeProvider theme={theme}>
      {<h1 style={{ color: 'blue' }}>Re-Store</h1>}
      <h1>Re-Store</h1>
      {/*<Typography variant='h2'>Re-Store</Typography>*/}
      <CssBaseline></CssBaseline>
      <Header darkmode={darkMode} handleThemeChange={handleThemeChange} ></Header>
      <Container>
        <Catalog ></Catalog>

      </Container>

    </ThemeProvider>
  )
}

export default App
