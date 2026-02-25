import { createContext, useState } from "react";
//1. Create the context
const CounterContext = createContext();

//2. Create the parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

//3. Create child component(s) to help implement the common task of the overall compound component
//4 Add the child component(s) as properties of the parent component (this step is optional)
export default Counter;
