import styles from "./Header.module.scss";
import clsx from "clsx";
import Image from "next/image";
import img_mannequin from "@/../public/assets/header/mannequin.png";
import img_ukraine from "@/../public/assets/header/ukraine.png";
import img_bg from "@/../public/assets/header/header-bg.png";

export default function Header() {
  return (
    <header className={clsx(styles.header, "gap-3")}>
      <div className={clsx(styles.author, "gap-3")}>
        <Image
          src={img_mannequin}
          alt="Image of mannequin"
          className={styles.mannequin}
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
          A Professional Dress Maker from Ukraine{" "}
          <Image src={img_ukraine} alt="blue-yellow heart" />
        </p>
      </h2>
    </header>
  );
}
