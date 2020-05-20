<<<<<<< HEAD
import React from "react";

import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducer";
import { like, dislike, superLike } from "../store/actions";

import Button from "@material-ui/core/Button";
=======
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
>>>>>>> frontend

const store = createStore(reducer);

export default function App() {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

const Content = () => {
  const pets = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDislike = () => {
    dispatch(dislike());
  };

  const handleSuperLike = () => {
    dispatch(superLike());
  };

  const handleLike = () => {
    dispatch(like());
  };

  const noMoreProfiles = () => {
    return pets.pendingPets.length === 0;
  };
  if (!noMoreProfiles())
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="logo" src={pets.currentPet.image} width="50%" height="auto" />
        <div>
          <Button color="inherit" onClick={handleDislike}>
            Dislike
          </Button>
          <Button color="inherit" onClick={handleSuperLike}>
            SuperLike
          </Button>
          <Button color="inherit" onClick={handleLike}>
            Like
          </Button>
        </div>
=======
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
>>>>>>> frontend
      </div>
    );

  return (
    <div>
      {pets.pastPets.map((pet) => {
        return (
          <div>
            <h1>{pet.name}</h1>
            <h2>{pet.status}</h2>
          </div>
        );
      })}
    </div>
  );
};
