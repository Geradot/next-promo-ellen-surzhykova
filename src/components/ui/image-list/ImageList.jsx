import Image from "next/image";
import styles from "./ImageList.module.scss";
import clsx from "clsx";

function ImageList({ chooseCurrentImage, photos, type }) {
  return (
    <section className="px-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" data-tab-content id={type}>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className="max-w-full h-[320px] cursor-pointer object-cover"
            quality={85}
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
