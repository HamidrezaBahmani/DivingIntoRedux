import classes from "./Counter.module.css";
//13-utelize store in Counter
//allow us to automatically select a part of our state managed by the store
//17-for dispatching we should use useDispatch hook
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  //18-call useDispatch we don't pass any argument but it returns
  //dispatch func
  const dispatch = useDispatch();

  //19-decalre to handler to wireup with buttuns
  const increamtHandler = () => {
    //20-use dispatch to dispatch new action
    //21-a action is obj with type property
    dispatch({ type: "increament" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  //14-we need to pass finction to use selector (basically to detemine which piece of data we need to extract from store)
  //for i.e we want to extract state=>state.counter
  //redux automatically setup the subscrition for store for this component
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* 15-use counter */}
      {show && <div className={classes.value}>{counter}</div>}
      {/* 16- for dipatching action first setup the button */}
      <div>
        {/* 22-wire up functioms with buttons*/}
        <button onClick={increamtHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
