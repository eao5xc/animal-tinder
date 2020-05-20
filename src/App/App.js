import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";
import AnimalCard from "../Components/AnimalCard";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { GlobalStyles } from "../Theme/Global";

const imageSource = "https://source.unsplash.com/random";

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
        <Button color="inherit" onClick={toggleTheme}>
          Theme Change
        </Button>
        <AnimalCard></AnimalCard>
        <Button color="inherit" onClick={toggleTheme}>
          Dislike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          SuperLike theme
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          Like theme
        </Button>
        <h1>it's a {theme} theme!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
