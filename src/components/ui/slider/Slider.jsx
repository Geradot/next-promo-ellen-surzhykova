import styles from "./Slider.module.scss";
import clsx from "clsx";
import Image from "next/image";

export default function Slider({ chosenSlide, closeSlider, image }) {
  function startCloseSlider(event) {
    if (
      !event.target.closest("#prev") &&
      !event.target.closest("#slides") &&
      !event.target.closest("#next")
    ) {
      closeSlider(false);
    }
  }
  return (
    <div className={styles.slider} onClick={startCloseSlider} id="slider">
      <button
        id="close-slider"
        className={clsx(styles[`close-slider`], "btn-close")}
      />
      <div id="slides" className={styles.slides}>
        <Image
          src={process.env.basePATH + image.src}
          blurDataURL={process.env.basePATH + image.src}
          alt={image.alt}
          fill
          priority
          quality={100}
        />
      </div>
      
      {/* Кнопки управления слайдером */}
      <div
        onClick={() => chosenSlide("prev")}
        id="prev"
        className={`${styles.controls} ${styles.prev}`}
      >
        &lt;
      </div>
      <div
        onClick={() => chosenSlide("next")}
        id="next"
        className={`${styles.controls} ${styles.next}`}
      >
        &gt;
      </div>
    </div>
  );
}
