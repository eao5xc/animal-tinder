import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
// import Image from "material-ui-image";
import Button from "@material-ui/core/Button";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { GlobalStyles } from "../Theme/Global";

// The function that toggles between themes
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <div>
          <img alt="logo" src="https://source.unsplash.com/random" />
        </div>
        <Button color="inherit" onClick={toggleTheme}>
          Dislike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          SuperLike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          Like theme
        </Button>
        <h1>It's a {theme} theme!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
