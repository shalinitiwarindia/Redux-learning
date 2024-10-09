import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { AppContextProvider } from "../Redux/AppContextProvider";
import { store } from "../Redux/store";
import { AppContext } from "../Redux/AppContextProvider";

const Counter = () => {
  const [state, setState] = React.useState(0);
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();

  const forceUpdate = () => setState(state + 1);

  const handleAdd = () => {
    dispatch(addCounter(1));
    forceUpdate();
  };
  const handleReduce = () => {
    dispatch(reduceCounter(1));
    forceUpdate();
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </>
  );
};

export { Counter };
