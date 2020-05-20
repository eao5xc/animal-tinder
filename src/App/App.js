import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducer";
import { ThemeProvider } from "styled-components";
import ThumbDown from "@material-ui/icons/ThumbDownRounded";
import ThumbUp from "@material-ui/icons/ThumbUpRounded";
import Favorite from "@material-ui/icons/FavoriteRounded";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AnimalCard from "../Components/AnimalCard";
import { lightTheme, darkTheme } from "../Theme/Theme";
import { GlobalStyles } from "../Theme/Global";
import { like, dislike, superLike } from "../store/actions";

const store = createStore(reducer);

export default function App() {
  return (
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

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (pets.currentPet)
    return (
      <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AnimalCard pet={pets.currentPet}></AnimalCard>
        <Box component="span" m={8}></Box>
        <ThumbDown
          color="primary"
          style={{ fontSize: 100 }}
          onClick={handleDislike}
        ></ThumbDown>
        <Box component="span" m={11}></Box>
        <Favorite
          color="secondary"
          style={{ fontSize: 150 }}
          onClick={handleSuperLike}
        ></Favorite>
        <Box component="span" m={11}></Box>
        <ThumbUp
          color="primary"
          style={{ fontSize: 100 }}
          onClick={handleLike}
        ></ThumbUp>
        <Box component="span" m={20}></Box>
        <Button color="secondary" onClick={toggleTheme}>
          change to {theme} theme
        </Button>
      </ThemeProvider>
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
