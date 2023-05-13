import styles from "./Header.module.scss";
import Image from "next/image";
import img_mannequin from "@/../public/assets/header/mannequin.png";
import img_ukraine from "@/../public/assets/header/ukraine.png";


export default function Header({fontFamily}) {
  return (
    <header className={`${styles.header} justify-around py-4 gap-2`}>
      <div className="h-3/4 sm:h-auto px-4 flex flex-col z-10 md:flex-row justify-evenly md:justify-start md:items-center gap-4 lg:gap-2">
        <Image
          src={img_mannequin}
          alt="Image of mannequin"
          className="mx-auto w-[200px] md:w-[300px] h-auto lg:h-[480px] brightness-200"
        />
        <div className="h-auto justify-center">
          <h1 className={`flex flex-col items-start justify-center ${fontFamily.allura.className}`}>
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[160px]">Ellen</span>
            <span className="text-6xl pl-6 sm:text-7xl md:text-8xl lg:text-[100px]">seamstress</span>
          </h1>
        </div>
      </div>
      <h2 className={`h-1/4 sm:h-auto flex ${styles.subheading} ${fontFamily.comfortaa.className}`}>
        <p className="text-sm md:text-lg my-auto">
          A Professional Dress Maker from Ukraine{" "}
          <Image src={img_ukraine} alt="blue-yellow heart" />
        </p>
      </h2>
    </header>
  );
}
