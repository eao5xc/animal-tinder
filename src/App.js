import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducer";
import { like, dislike, superLike } from "./store/actions";

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
  const handleLike = () => {
    console.log(pets);
    dispatch(like());
    console.log(pets);
  };
  return <button onClick={handleLike}>Like</button>;
};
