import Logo from "@/app/components/common/logo/Logo";
import Navigation from "@/app/components/layout/navigation/Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
