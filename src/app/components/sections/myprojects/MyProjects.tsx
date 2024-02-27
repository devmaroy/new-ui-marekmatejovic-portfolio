import Heading from "@/app/components/common/heading/Heading";
import Link from "next/link";
import Image from "next/image";
import styles from "./MyProjects.module.scss";

const MYPROJECTS = [
  {
    id: "1",
    image: "/images/projects/maresanka.png",
    title: "Brewed Reads",
    description:
      "Book library designed for all coffee lovers, combining the love for coffee and books.",
    link: "https://brewedreads.vercel.app",
  },
  {
    id: "2",
    image: "/images/projects/maresanka.png",
    title: "Maresanka",
    description:
      "Personal portfolio showcasing the digital creativity of Maresanka.",
    link: "https://maresanka.marekmatejovic.com",
  },
  {
    id: "3",
    image: "/images/projects/maresanka.png",
    title: "Byron Wix",
    description:
      "Website for personal photographer, featuring a gallery of the captured moments.",
    link: "https://byronwixphotography.marekmatejovic.com/",
  },
  {
    id: "4",
    image: "/images/projects/maresanka.png",
    title: "Mark Warren",
    description:
      "Web developer's personal site to highlight his latest projects and skills.",
    link: "https://markwarrenportfolio.marekmatejovic.com/",
  },
];

const MyProjects = () => {
  return (
    <section className={styles.myprojects}>
      <div className={styles.myprojects__container}>
        <Heading highlight="My Web Creations">Let’s Explore</Heading>

        <div className={styles.myprojects__grid}>
          {MYPROJECTS.map(({ id, image, title, description, link }) => (
            <div key={id} className={styles.myprojects__project}>
              <div className={styles.myprojects__image}>
                <Image
                  src={image}
                  width={2048}
                  height={1935}
                  alt={`${title} project image`}
                />
              </div>

              <h3 className={styles.myprojects__title}>{title}</h3>
              <div className={styles.myprojects__description}>
                <p>{description}</p>
              </div>
              <Link href={link} className={styles.myprojects__link}>
                <Image
                  src="/images/icons/arrow-icon.svg"
                  width={22}
                  height={22}
                  alt="Arrow icon"
                />
                Visit Website
              </Link>
            </div>
          ))}

          {/* <div className={styles.myprojects__project}>
            <h3 className={styles.myprojects__heading}>Brewed Reads</h3>
            <div className={styles.myprojects__text}>
              <p>
                Book library designed for all coffee lovers, combining the love
                for coffee and books.
              </p>
            </div>
            <Link
              href="https://brewedreads.vercel.app"
              className={styles.myprojects__link}
            >
              Visit Website
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
