import Layout from "@/components/layout/Layout";
import ImageList from "@/components/ui/image-list/ImageList";
import photosJson from "@/photos.json";
import Slider from "@/components/ui/slider/Slider";
import NavDresses from "@/components/ui/nav-dresses/NavDresses";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [type, setType] = useState(null);
  let photos = useMemo(() => photosJson[type], [type])

  const [isSlider, setIsSlider] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setType("wedding");
  }, []);

  function handleData(data) {
    setType(data);
  }

  function chooseCurrentImage(data) {
    setCurrentImage(data);
  }

  function closeSlider() {
    setCurrentImage(null);
  }

  useEffect(() => {
    setIsSlider(currentImage !== null);
  }, [currentImage]);

  return (
    <Layout>
      <NavDresses onData={handleData} />
      {isSlider && (
        <Slider
          closeSlider={closeSlider}
          currentImage={currentImage}
          photos={photos}
        />
      )}
      {photos && (
        <ImageList
          chooseCurrentImage={chooseCurrentImage}
          photos={photos}
          type={type}
        />
      )}
    </Layout>
  );
}
