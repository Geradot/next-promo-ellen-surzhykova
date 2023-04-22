import SimpleImageSlider from "react-simple-image-slider";

import React from 'react'

const SimpleSlider = ({photos}) => {
  const images = photos.map(({src}) => ({ url: process.env.basePATH + src}));

  return (
    <>
      <SimpleImageSlider
        height={700}
        width={550}
        images={images}
        showNavs={true}
      />
    </>
  )
}


export default SimpleSlider;