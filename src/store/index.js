//1-for deploying redux first make store folder
//2-in that make file named index.js

//3- import createStore from redux
import { createStore } from "redux";

//5- we need reducer pointer for createStore()
//state={counter:0} =>default value
//here we handle diffrent states
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//4-const store = createStore();
//6-const store = createStore(counterReducer);
const store = createStore(counterReducer);

//7- now we make this redux store we should make it
//available for other component
//8-we just need to provide it once (go to main index.js file)
export default store;
