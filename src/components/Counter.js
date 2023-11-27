import classes from "./Counter.module.css";
//13-utelize store in Counter
//allow us to automatically select a part of our state managed by the store
import { useSelector } from "react-redux";
const Counter = () => {
  //14-we need to pass finction to use selector (basically to detemine which piece of data we need to extract from store)
  //for i.e we want to extract state=>state.counter
  //redux automatically setup the subscrition for store for this component
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
