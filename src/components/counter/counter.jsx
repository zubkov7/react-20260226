import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  // const [activeRestaurant, setActiveRestaurant] = useState(0);

  return {
    value: count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
};

export const Counter = (props) => {
  //   const [count, setCount] = useState(0);
  //   const [count, setCount] = useState({ value: 0 });

  //   console.log("Render - Counter");

  //   const onChange = () => {
  //     // logic

  //     setCount();
  //   };

  const { value, decrement, increment } = useCounter();

  //   if (value % 2 === 0) {
  //     // call hook

  //     return <div>even</div>;
  //   }

  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       //   setCount(count - 1);
    //       setCount({ ...count, value: count.value - 1 });
    //     }}
    //   >
    //     -
    //   </button>
    //   <div>{count.value}</div>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    // </div>
    <div>
      <button onClick={increment}>-</button>
      <span>{value}</span>
      <button onClick={decrement}>+</button>
    </div>
  );
};
