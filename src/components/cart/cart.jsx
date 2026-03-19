import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";

export const Cart = () => {
  const cart = useSelector(selectCartItems);

  if (!cart.length) {
    return null;
  }

  return (
    <ul>
      {cart.map(({ id, amount }) => (
        <li key={id}>
          {id} - {amount}
        </li>
      ))}
    </ul>
  );
};
