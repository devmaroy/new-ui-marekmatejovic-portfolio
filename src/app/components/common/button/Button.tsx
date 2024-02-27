import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: string;
  children: ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
      {children}
    </button>
  );
};

export default Button;
