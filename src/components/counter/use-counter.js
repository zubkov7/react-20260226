import { useCallback, useState } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((prevState) => Math.min(prevState + 1, max)),
    [max],
  );

  const decrement = () => setValue(Math.max(value - 1, min));

  return {
    value,
    increment,
    decrement,
  };
};
