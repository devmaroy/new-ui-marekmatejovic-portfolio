import Link from "next/link";
import styles from "./Social.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <Link href="https://facebook.com/" className={styles.social__link}>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </Link>
      </li>
      <li>
        <Link href="https://facebook.com/" className={styles.social__link}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
      </li>
      <li>
        <Link href="https://facebook.com/" className={styles.social__link}>
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
        </Link>
      </li>
      <li>
        <Link href="https://facebook.com/" className={styles.social__link}>
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </Link>
      </li>
    </ul>
  );
};

export default Social;
