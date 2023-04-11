import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.contacts}>
        <div className={styles.email} data-aos="fade-down">
          <Image
            src={process.env.basePATH + "/assets/icons/email.svg"}
            alt="Email icon"
            width={30}
            height={30}
          />
          <a href="mailto:Luna1lika@gmail.com">Luna1lika@gmail.com</a>
        </div>
        <div className={styles.phone} data-aos="fade-down">
          <Image
            src={process.env.basePATH + "/assets/icons/phone.png"}
            alt="Phone icon"
            width={30}
            height={30}
          />
          <a href="tel:+17124496163">+1&nbsp;(712)&nbsp;449-6163</a>
        </div>
      </section>
      <p data-aos="fade-up">
        Created by{" "}
        <a href="https://github.com/Geradot" className="link-underline-dark">
          Anton Ryzhenko
        </a>{" "}
        © 2023
      </p>
    </footer>
  );
}
