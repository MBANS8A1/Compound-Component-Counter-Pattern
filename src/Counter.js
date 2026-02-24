import { createContext, useState } from "react";

const CounterContext = createContext();
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return <span>Counter</span>;
}
export default Counter;
