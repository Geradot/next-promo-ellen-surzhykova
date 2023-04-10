import Layout from "@/components/layout/Layout";
import ImageList from "@/components/ui/image-list/ImageList";
import photos from "@/photos.json";
import Slider from "@/components/ui/slider/Slider";
import NavDresses from "@/components/ui/nav-dresses/NavDresses";
import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState("wedding");

  const [isSlider, setIsSlider] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [photoTypes, setPhotoTypes] = useState(null);

  function handleData(data) {
    setType(data);
  }

  function chooseCurrentImage(data) {
    setCurrentImage(data);
  }

  function closeSlider(data) {
    setIsSlider(data);
  }

  useEffect(() => {
    setPhotoTypes(Object.keys(photos))
  }, [type])

  // Prev or Next image
  function chosenSlide(data) {
    switch (data) {
      case "prev":
        photoTypes.forEach((t) => {
          if (t === type) {
            setCurrentImage(
              photos[`${t}`].find((item) => item.id === currentImage.id - 1) ??
                photos[`${t}`].slice(-1)[0]
            );
          }
        });
        break;
      case "next":
        photoTypes.forEach((t) => {
          if (t === type) {
            setCurrentImage(
              photos[`${t}`].find((item) => item.id === currentImage.id + 1) ??
                photos[`${t}`].slice(0)[0]
            );
          }
        });
        break;
    }
  }
  useEffect(() => {
    setIsSlider(currentImage !== null);
  }, [currentImage]);

  return (
    <Layout>
      <NavDresses onData={handleData} />
      {isSlider && (
        <Slider
          chosenSlide={chosenSlide}
          closeSlider={closeSlider}
          image={currentImage}
        />
      )}
      <ImageList
        onData={chooseCurrentImage}
        photos={photos[`${type}`]}
        type={type}
      />
    </Layout>
  );
}
