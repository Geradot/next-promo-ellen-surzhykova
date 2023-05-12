import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer({ fontFamily }) {
  return (
    <footer className={`${styles.footer} ${fontFamily.className}`}>
      <section className={styles.contacts}>
        <div className={styles.email} data-aos="fade-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <a href="mailto:Luna1lika@gmail.com">Luna1lika@gmail.com</a>
        </div>
        <div className={styles.phone} data-aos="fade-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <a
            style={{
              paddingTop: "4px",
            }}
            href="tel:+17124496163"
          >
            +1&nbsp;(712)&nbsp;449-6163
          </a>
        </div>
      </section>
      <p data-aos="fade-up">
        Created by{" "}
        <a href="https://github.com/Geradot" className="link-underline-dark">
          Anton&nbsp;Ryzhenko
        </a>{" "}
        © 2023
      </p>
    </footer>
  );
}
