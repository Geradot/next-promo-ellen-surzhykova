import styles from "./Slider.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

export default function Slider({ photos, closeSlider, currentImage }) {
  const [activeSlide, setActiveSlide] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", closingSliderViaKey);
    return () => {
      document.removeEventListener("keydown", closingSliderViaKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setActiveSlide(currentImage);
  }, [currentImage]);

  useEffect(() => {
    if (activeSlide !== null) setIsImageLoaded(true);
  }, [activeSlide]);

  function closingSlider(event) {
    if (
      !event.target.closest("#prev") &&
      !event.target.closest("#slides") &&
      !event.target.closest("#next")
    ) {
      closeSlider();
    }
  }

  function closingSliderViaKey(e) {
    if (e.code === "Escape") {
      closeSlider();
    }
  }

  // Prev or Next image
  function chosenSlide(data) {
    setIsImageLoaded(false);
    switch (data) {
      case "prev":
        setActiveSlide(
          (prev) =>
            photos.find((item) => item.id === prev.id - 1) ??
            photos.slice(-1)[0]
        );
        break;

      case "next":
        setActiveSlide(
          (prev) =>
            photos.find((item) => item.id === prev.id + 1) ?? photos.slice(0)[0]
        );
        break;
    }
  }
  return (
    <div className={styles.slider} onClick={closingSlider} id="slider">
      {/* <button
        id="close-slider"
        className={clsx(styles[`close-slider`], "btn-close")}
      /> */}
      <svg
        id="close-slider"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 fixed top-3 right-3 text-white cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <div id="slides" className={styles.slides}>
        {isImageLoaded ? (
          <Image
            src={activeSlide.src}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8VA8AAkkBY8DEq9wAAAAASUVORK5CYII="
            alt={activeSlide.alt}
            fill
            quality={100}
          />
        ) : (
          <Loader />
        )}
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
