import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";
import AnimalCard from "../Components/AnimalCard";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { GlobalStyles } from "../Theme/Global";
// The function that toggles between themes
function App() {
  const imageSource = "https://source.unsplash.com/random";

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
        <Button color="inherit" onClick={toggleTheme}>
          Theme Change
        </Button>
        <AnimalCard ImageSource={imageSource}></AnimalCard>
        <Button color="inherit" onClick={toggleTheme}>
          Dislike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          SuperLike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          Like theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
