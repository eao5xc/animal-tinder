import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThumbDown from "@material-ui/icons/ThumbDownRounded";
import ThumbUp from "@material-ui/icons/ThumbUpRounded";
import Favorite from "@material-ui/icons/FavoriteRounded";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
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
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <AnimalCard ImageSource={imageSource}></AnimalCard>
        <Box component="span" m={8}></Box>
        <ThumbDown
          color="primary"
          style={{ fontSize: 100 }}
          onClick={toggleTheme}
        ></ThumbDown>
        <Box component="span" m={11}></Box>
        <Favorite
          color="secondary"
          style={{ fontSize: 150 }}
          onClick={toggleTheme}
        ></Favorite>
        <Box component="span" m={11}></Box>
        <ThumbUp
          color="primary"
          style={{ fontSize: 100 }}
          onClick={toggleTheme}
        ></ThumbUp>
        <Box component="span" m={20}></Box>
        <Button color="secondary" onClick={toggleTheme}>
          change to {theme} theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
