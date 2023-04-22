import styles from "./Header.module.scss";
import Image from "next/image";
import img_mannequin from "@/../public/assets/header/mannequin.png";
import img_ukraine from "@/../public/assets/header/ukraine.png";


export default function Header({fontFamily}) {
  return (
    <header className={`${styles.header} gap-3`}>
      <div className={`${styles.author} gap-3`}>
        <Image
          src={img_mannequin}
          alt="Image of mannequin"
          className={styles.mannequin}
          data-aos="fade-right"
        />
        <div className={styles.author__text}>
          <h1 className={`${styles.heading} ${fontFamily.allura.className}`} data-aos="fade-down">
            <span className={styles.ellen}>Ellen</span>
            <span className={styles.seamstress}>seamstress</span>
          </h1>
        </div>
      </div>
      <h2 className={`${styles.subheading} ${fontFamily.comfortaa.className}`} data-aos="fade-up">
        <p>
          A Professional Dress Maker from Ukraine{" "}
          <Image src={img_ukraine} alt="blue-yellow heart" />
        </p>
      </h2>
    </header>
  );
}
