import Image from "next/image";
import styles from "./ImageList.module.scss";

function ImageList({ chooseCurrentImage, photos, type }) {
  return (
    <section className={styles[`photo-gallery`]}>
      <div className={styles.content} data-tab-content id={type}>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={process.env.basePATH + photo.src}
            alt={photo.alt}
            className={styles[`gallery-image`]}
            width={250}
            height={420}
            onClick={() => chooseCurrentImage(photo)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8VA8AAkkBY8DEq9wAAAAASUVORK5CYII="
          />
        ))}
      </div>
    </section>
  );
}

export default ImageList;
