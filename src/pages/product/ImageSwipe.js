import React, { useState, useEffect, useRef } from "react";

const ImageSwipe = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (isTransitioning) {
      slider.style.transition = "transform 0.5s ease-in-out";
    } else {
      slider.style.transition = "none";
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex === extendedImages.length - 1) {
        slider.style.transition = "none";
        setCurrentIndex(1);
        slider.style.transform = `translateX(-100%)`;
      }

      if (currentIndex === 0) {
        slider.style.transition = "none";
        setCurrentIndex(extendedImages.length - 2);
        slider.style.transform = `translateX(-${
          (extendedImages.length - 2) * 100
        }%)`;
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, extendedImages.length, isTransitioning]);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-100%)`;
  }, []);

  return (
    <div className="relative flex justify-center items-center w-72 h-72 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex"
        style={{ width: `${extendedImages.length * 100}%` }}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name}-${index}`}
            className="w-72 h-72 object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 text-white text-3xl h-10 w-10 bg-black bg-opacity-50 rounded-full outline-none"
      >
        &#60;
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 text-white text-3xl h-10 w-10 bg-black bg-opacity-50 rounded-full outline-none"
      >
        &#62;
      </button>
    </div>
  );
};

export default ImageSwipe;
