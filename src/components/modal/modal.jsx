import { createPortal } from "react-dom";
import { useState } from "react";

export const Modal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Show portal</button>
      {isVisible && createPortal(children, document.getElementById("modal"))}
    </>
  );
};
