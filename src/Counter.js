import { createContext, useContext, useState } from "react";
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
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

//4 Add the child component(s) as properties of the parent component (this step is optional)

Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Label = Label;

export default Counter;
