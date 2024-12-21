import Image from "next/image";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-section"]}>
      <h1 className={styles["about-title"]}>About me</h1>
      <p className={styles["about-description"]}>
        {"I'm"} Muhammad Waseem, passionate about building sleek, responsive web
        experiences.
      </p>
      <div className={styles["about-card"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
          debitis nam animi. Est natus qui quibusdam, ullam vero architecto eum
          obcaecati quasi, iusto laborum cum aliquam voluptas, aspernatur saepe!
        </p>
      </div>
      <div>
        <h2 className={styles["skills-title"]}>Skills & Experties</h2>
        <div className={styles["skills-grid"]}>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/coding.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>HTML</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>CSS</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>JavaScript</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>TypeScript</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/game.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>Tailwind CSS</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/Microphone.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>React.js</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/Photographer.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>Next.js</h3>
          </div>
          <div className={styles["skill-card"]}>
            <div className={styles["skill-icon"]}>
              <Image
                src="/images/illustration.png"
                alt="coding"
                width={340}
                height={470}
              />
            </div>
            <h3 className={styles["skill-title"]}>Python</h3>
          </div>
        </div>
        <div className={styles["philosophy-card"]}>
          <h5 className={styles["philosophy-title"]}>Work Philosophy</h5>
          <p className={styles["philosophy-description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
            debitis nam animi. Est natus qui quibusdam, ullam vero architecto
            eum obcaecati quasi, iusto laborum cum aliquam voluptas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
