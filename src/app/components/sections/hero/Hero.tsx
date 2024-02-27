import Header from "@/app/components/layout/header/Header";
import Social from "@/app/components/common/social/Social";
import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <Header />
        <div>
          <h1 className={styles.hero__heading}>
            <span>Hi!</span> I’m Marek Matejovic{" "}
            <span className={styles.hero__highlight}>Front-End  Developer</span>
          </h1>

          <div className={styles.hero__text}>
            <p>
              My specialization lies in crafting nice web experiences with
              TypeScript, React, and Next.js.
            </p>
          </div>

          <Social />
        </div>

        <div className={styles.hero__image}>
          <Image
            src="/images/hero.jpg"
            width={888}
            height={1120}
            alt="Marek Matejovic portrait photo"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
