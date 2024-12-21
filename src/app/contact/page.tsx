import Image from "next/image";
import styles from "./contact.module.css"; // Import the custom CSS file

function Contact() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className={styles.headerGrid}>
        <h4 className={`${styles.infoHeading} ${styles.hiddenOnMobile}`}>
          Leave Us Your Info
        </h4>
        <h4 className={styles.touchHeading}>
          Get in Touch
        </h4>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.infoForm}>
          <form className={styles.form}>
            <label>
              Name
              <input
                className={styles.inputField}
                type="text"
                name="name"
                required
              />
            </label>
            <label className={styles.inputLabel}>
              Email
              <input
                className={styles.inputField}
                type="email"
                name="email"
                required
              />
            </label>
            <label className={styles.inputLabel}>
              WhatsApp
              <input
                className={styles.inputField}
                type="number"
                name="whatsapp"
                required
              />
            </label>
            <label className={styles.inputLabel}>
              Your Message
              <textarea
                className={styles.textareaField}
                name="message"
                required
              />
            </label>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        <h4 className={`${styles.infoHeading} ${styles.visibleOnMobile}`}>
        </h4>
        <div className={styles.contactDetails}>
          <div className={`${styles.contactCard}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconBackground}>
                <Image
                  src="/images/location.png"
                  alt="location"
                  width={150}
                  height={200}
                />
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div>
                <p>Country:</p>
                <p>City:</p>
                <p>Street:</p>
              </div>
              <div>
                <p>Pakistan</p>
                <p>Nawab Shah</p>
                <p>11-Kazi Ahmed</p>
              </div>
            </div>
          </div>
          {/* Additional Contact Cards */}
          <div className={`${styles.contactCard}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconBackground}>
                <Image
                  src="/images/mail.png"
                  alt="email"
                  width={150}
                  height={200}
                />
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div>
                <p>Email:</p>
                <p>Contact:</p>
                <p>WhatsApp:</p>
              </div>
              <div>
                <p>aliwaseem1906@gmail.com</p>
                <p>03282802628</p>
                <p>03113045250</p>
              </div>
            </div>
          </div>
          <div className={`${styles.contactCard}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconBackground}>
                <Image
                  src="/images/mobile.png"
                  alt="mobile"
                  width={150}
                  height={200}
                />
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div>
                <p>LinkedIn:</p>
                <p>GitHub:</p>
                <p>Telegram:</p>
              </div>
              <div>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
