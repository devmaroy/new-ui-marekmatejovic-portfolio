"use client";

import Link from "next/link";
import Logo from "@/app/components/common/logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.navigation__toggle}
        onClick={() => setIsMenuOpen(true)}
      >
        Menu <FontAwesomeIcon icon={["fas", "bars"]} />
      </button>

      <div
        className={classNames(styles.navigation__wrapper, {
          [styles["navigation__wrapper--open"]]: isMenuOpen,
        })}
      >
        <div className={styles.navigation__container}>
          <div className={styles.navigation__header}>
            <Logo />
            <button
              className={styles.navigation__toggle}
              onClick={() => setIsMenuOpen(false)}
            >
              Close <FontAwesomeIcon icon={["fas", "x"]} />
            </button>
          </div>

          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link href="/" className={styles.navigation__link}>
                Home
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="#my-projects" className={styles.navigation__link}>
                My Projects
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="#contact" className={styles.navigation__link}>
                Contact
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link href="/blog" className={styles.navigation__link}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
