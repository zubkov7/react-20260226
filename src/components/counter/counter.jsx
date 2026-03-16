import styles from "./counter.module.css";
import { Button } from "../button/button";
import { useEffect, useRef } from "react";

export const Counter = ({ value, increment, decrement }) => {
  const rootRef = useRef(null); // { current: null }

  // useEffect(() => {
  //   console.log(rootRef.current.clientHeight);
  // }, []);

  // const intervalRef = useRef(null);

  // useEffect(() => {
  //   if (!intervalRef.current) {
  //     intervalRef.current = setInterval(increment, 1000);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [increment]);

  return (
    <div
      // ref={(element) => {
      //   console.log(element);
      // }}
      ref={rootRef}
    >
      <Button title='+' onClick={increment} size='400' />
      <span className={styles.count}>{value}</span>
      <Button title='-' onClick={decrement} size='400' />
      {/* <Button
        title='stop'
        onClick={() => clearInterval(intervalRef.current)}
        ref={() => console.log("send analytics - click stop")}
      /> */}
    </div>
  );
};
