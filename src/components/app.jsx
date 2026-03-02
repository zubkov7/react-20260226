const list = [1, 2, 3, 4, 5, 6];

import { restaurants } from "../../materials/mock";
import "./app.css";

export const App = ({ name, rating }) => {
  // const { name, rating } = props;
  return (
    <ul>
      {list.map((item) => (
        <li>{item % 2 === 0 ? 0 : 1}</li>
      ))}
    </ul>
  );
};

// restaurants.map(({ name, rating }) => (
//   <Restaurant name={name} rating={rating} />
// ));
