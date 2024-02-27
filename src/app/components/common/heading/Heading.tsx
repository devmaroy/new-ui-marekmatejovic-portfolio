import { ReactNode } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  children: ReactNode;
  highlight?: string;
}

const Heading = ({ children, highlight = "" }: HeadingProps) => {
  return (
    <h2 className={styles.heading}>
      {children} {highlight && <span>{highlight}</span>}
    </h2>
  );
};

export default Heading;
