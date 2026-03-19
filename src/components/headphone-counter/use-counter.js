import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
  selectCartItems,
} from "../../redux/entities/cart/slice";

export const useCount = ({ id } = {}) => {
  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

  const decrement = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id],
  );

  return {
    value: amount,
    increment,
    decrement,
  };
};
