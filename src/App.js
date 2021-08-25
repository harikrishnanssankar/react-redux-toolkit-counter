import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { increment, decrement } from "./redux/counterSlice";
import { incrementTwo, decrementTwo, reset } from "./redux/testSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const counterTwo = useSelector((state) => state.test);

  const handleIncrement = () => {
    dispatch(increment());
    dispatch(incrementTwo());
  };
  const handleDecrement = () => {
    dispatch(decrement());
    dispatch(decrementTwo());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <h1>Counter two : {counterTwo}</h1>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
