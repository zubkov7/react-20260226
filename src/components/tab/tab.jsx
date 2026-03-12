import { Button } from "../button/button";

import styles from "./tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      className={styles.button}
      disabled={isActive}
      onClick={onClick}
      size='xl'
    >
      {title}
    </Button>
  );
};
