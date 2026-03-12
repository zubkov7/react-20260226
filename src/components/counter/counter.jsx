import { useEffect } from "react";
import { useCount } from "./use-counter";

const EXAMPLE = "";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  // useEffect(() => {
  //   console.log("mount");
  // }, []);

  // useEffect(() => {
  //   // cleanup function
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("mount");

  //   // cleanup function
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("render: ", value);

  //   return () => {
  //     console.log("cleanup: ", value);
  //   };
  // }, [value]);

  // useEffect(() => {
  //   console.log(EXAMPLE);
  // }, []);

  // useEffect(() => {
  //   console.log("mount");
  // }, []);

  // console.log("render");

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
