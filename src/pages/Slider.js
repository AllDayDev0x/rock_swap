import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

// Import Swiper JS
SwiperCore.use([Navigation]);

const Slider = () => {
  // Define the array of images to display in the slider
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300"
  ];

  // Define the current index of the active slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the function to move to the next slide
  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    console.log("currentIndex", currentIndex)
  };

  // Define the function to move to the previous slide
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>
      <Swiper navigation={true} slidesPerView={1}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`https://picsum.photos/200/300 ${currentIndex}`} alt={`Slide ${currentIndex}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;