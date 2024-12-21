import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css"; // Import the custom CSS module

function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.header}>
        <h2>Recent Projects</h2>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum
          maxime a doloribus suscipit natus? Nobis expedita sed eligendi sunt
          unde earum possimus, fugit enim perspiciatis totam.
        </p>
      </div>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/coding.png"
              alt="coding"
              width={340}
              height={470}
            />
          </div>
          <h3 className={styles.projectTitle}>Resume Builder</h3>
          <p className={styles.projectTech}>Html, Css, JS</p>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/illustration.png"
              alt="coding"
              width={340}
              height={470}
            />
          </div>
          <h3 className={styles.projectTitle}>Simple Calculator</h3>
          <p className={styles.projectTech}>Html, Css, JS</p>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/game.png"
              alt="coding"
              width={340}
              height={470}
            />
          </div>
          <h3 className={styles.projectTitle}>Number Guessing Game</h3>
          <p className={styles.projectTech}>Html, Css, JS</p>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.iconWrapper}>
            <Image
              src="/images/Microphone.png"
              alt="coding"
              width={340}
              height={470}
            />
          </div>
          <h3 className={styles.projectTitle}>
            <Link href="www.google/github.com">Currency Converter</Link>
          </h3>
          <p className={styles.projectTech}>Html, Css, JS</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
