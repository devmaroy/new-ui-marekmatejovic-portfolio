import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="images/logo.svg"
        alt="Marek Matejovic logo"
        width="28"
        height="36"
      />
      <Link href="/" className={styles.logo__link}>
        MAREK MATEJOVIC
      </Link>
    </div>
  );
};

export default Logo;
