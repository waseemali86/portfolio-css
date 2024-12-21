import Image from "next/image";
import styles from "./footer.module.css"; // Adjust the path based on where your file is located

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <div className="text-center">
          <p className={styles["footer-title"]}>Portfolio</p>
        </div>
        <div className={styles["social-icons"]}>
          <Image
            className={styles["social-icon"]}
            src="/Facebook.png"
            alt="Facebook"
            width={150}
            height={200}
          />
          <Image
            className={styles["social-icon"]}
            src="/Instagram.png"
            alt="Instagram"
            width={150}
            height={200}
          />
          <Image
            className={styles["social-icon"]}
            src="/Twitter.png"
            alt="Twitter"
            width={150}
            height={200}
          />
          <Image
            className={styles["social-icon"]}
            src="/Linkeding.png"
            alt="LinkedIn"
            width={150}
            height={200}
          />
          <Image
            className={styles["social-icon"]}
            src="/Youtube.png"
            alt="YouTube"
            width={150}
            height={200}
          />
          <Image
            className={styles["social-icon"]}
            src="/Dribbble.png"
            alt="Dribbble"
            width={150}
            height={200}
          />
        </div>
        <div className={styles["footer-links"]}>
          <div>
            <p>About us</p>
            <p>Home</p>
            <p>Portfolio</p>
            <p>Projects</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Contact us</p>
            <p>WhatsApp +92-3113045250</p>
            <p>Phone +92-3093314935</p>
            <p>Email waseemjunejo1890@gmail.com</p>
          </div>
          <div>
            <p>Skills</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Next.js</p>
            <p>Full-stack Developer</p>
          </div>
          <div>
            <p>Social Media</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>TikTok</p>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <p>@2024 Muhammad Waseem</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
