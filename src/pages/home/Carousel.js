import React, { useState, useEffect, useRef } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const items = [
    {
      id: 1,
      src: "https://res.cloudinary.com/du1stzhac/image/upload/v1768275860/1_2_rxjt0t.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/du1stzhac/image/upload/v1768275860/3_1_yhblup.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/du1stzhac/image/upload/v1768275860/2_1_grnxkm.png",
    },
    
    {
      id: 4,
      src: "https://res.cloudinary.com/du1stzhac/image/upload/v1768275860/4_1_enot45.png",
    },
  ];

  const totalItems = items.length;

  const scrollNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const scrollPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex >= totalItems) {
        setCurrentIndex(0);
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          carouselRef.current.style.transform = `translateX(0)`;
        }
      } else if (currentIndex < 0) {
        setCurrentIndex(totalItems - 1);
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          carouselRef.current.style.transform = `translateX(-${
            (totalItems - 1) * 100
          }%)`;
        }
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener(
        "transitionend",
        handleTransitionEnd
      );
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [currentIndex, totalItems]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative h-auto mx-auto overflow-hidden">
      <div ref={carouselRef} className="flex">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={item.src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-50 text-3xl hover:text-white rounded-full"
      >
        <VscChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-50 text-3xl hover:text-white rounded-full"
      >
        <VscChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
