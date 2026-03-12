import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ children, onClick, className, size, disabled }) => {
  return (
    <button
      className={classNames(styles.root, className, {
        [styles.l]: size === "l",
        [styles.xl]: size === "xl",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}s
    </button>
  );
};
