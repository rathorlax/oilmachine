import React, { useState, useRef, useEffect } from "react";

const InfiniteCarousel = () => {
  const cards = [
    {
      title: "Laxman Rathor from Neemuch",
      description:
        "⭐️⭐️⭐️⭐️⭐️Excellent oil maker machine! Very easy to use and produces pure, fresh oil at home. ",
      productBenefits: [
        "The build quality is solid and cleaning is simple. ",
        "Totally worth the purchase.",
        
      ],
    },
    {
      title: "Rakesh from jaora",
      description:
        "⭐️⭐️⭐️⭐️⭐️I’m extremely satisfied with this oil maker machine. It extracts oil efficiently and the quality is far better than",
      productBenefits: [
        "store-bought oils. The machine runs smoothly, doesn’t make much noise, and is easy to clean.",
        "Highly recommended for anyone who wants healthy, chemical-free oil at home.",
      
      ],
    },
    {
      title: "Madhu Dashore from Indore",
      description:
        "⭐️⭐️⭐️⭐️⭐️This oil maker machine has been a great addition to our kitchen.",
      productBenefits: [
        "We can now make fresh groundnut and coconut oil whenever we need.",
        "The taste and purity are excellent, and it gives peace of mind knowing exactly what we consume.",
     
      ],
    },
    {
      title: "Anil Rathor from Pithampur(Dhar)",
      description:
        "⭐️⭐️⭐️⭐️Great product at this price! The oil yield is good and the machine feels durable",
      productBenefits: [
        "Free from harmful chemicals.",
        "Clear instructions, easy operation, and low maintenance. Very happy with the performance.",
      
      ],
    },
    {
      title: "Deepali Rawat from Ratlam",
      description:
        "⭐️⭐️⭐️⭐️Excellent oil maker machine! Very easy to use and produces pure, fresh oil at home.",
      productBenefits: [
        "The build quality is solid and cleaning is simple.",
        "Totally worth the purchase.",
        "Quality tested for purity.",
      ],
    },
    {
      title: "Kawalpreet Singh from Delhi",
      description:
        "⭐️⭐️⭐️⭐️This oil maker machine has been a great addition to our kitchen. We can now make fresh groundnut and coconut oil whenever we need.",
      productBenefits: [
        "The taste and purity are excellent, and it gives peace of mind knowing exactly what we consume.",
       
      ],
    },
  ];
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const animationIntervalRef = useRef(null);
  const scrollSpeed = 2;

  const startAnimation = () => {
    animationIntervalRef.current = setInterval(() => {
      setCurrentPosition((prev) => prev - scrollSpeed);
    }, 1000 / 60);
  };

  const stopAnimation = () => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAnimation();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAnimation();
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  return (
    <div className="overflow-hidden w-full shadow-lg">
      <div
        ref={containerRef}
        className="flex"
        style={{
          transform: `translateX(${currentPosition}px)`,
          transition: "transform 0s",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[340px] sm:w-96 h-64 m-4 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="h-full w-full p-2 flex flex-col justify-between">
              <h1 className="text-yellow-600 break-words p-2 text-center text-3xl font-medium uppercase">
                {card.title}
              </h1>
              <p className="text-gray-300 text-justify mt-2 mb-2">
                {card.description}
              </p>
              <div>
                {card.productBenefits.map((item, index) => (
                  <li className="text-gray-200" key={index}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default InfiniteCarousel;
