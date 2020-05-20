import React from "react";

import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducer from "../store/reducer";
import { like, dislike, superLike } from "../store/actions";

import Button from "@material-ui/core/Button";

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
