import styles from "./Header.module.scss";
import clsx from "clsx";
import Image from "next/image";
import img_maneken from "@/../public/assets/header/maneken.png";
import img_ukraine from "@/../public/assets/header/ukraine.png";

export default function Header() {
  return (
    <header className={clsx(styles.header, "gap-3")}>
      <div className={clsx(styles.author, "gap-3")}>
        <Image
          src={img_maneken}
          alt="Image of maneken"
          className={styles.maneken}
          data-aos="fade-right"
        />
        <div className={styles.author__text}>
          <h1 className={styles.heading} data-aos="fade-down">
            <span>Ellen</span>
            <span>seamstress</span>
          </h1>
        </div>
      </div>
      <h2 className={styles.subheading} data-aos="fade-up">
        <p>
          A Professional Dress Maker from Ukraine
          <Image src={img_ukraine} alt="blue-yellow heart" />
        </p>
      </h2>
    </header>
  );
}
