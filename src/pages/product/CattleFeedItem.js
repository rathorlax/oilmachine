import React from "react";
import ProductCard from "./ProductCard";
import cattleFeed from "./ProductItem/CattleFeed.json";
import { useNavigate } from "react-router-dom";

const filteredProductList = cattleFeed.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const CattleFeed = () => {
  const navigate = useNavigate();

  const handleBackClick = (event) => {
    navigate("/product");
  };
  return (
    <>
      <button
        onClick={handleBackClick}
        className="absolute ml-2 mt-5 text-white hidden lg:block bg-blue-500 p-2 rounded"
      >
        Back
      </button>
      <div>
        <h1 className="text-3xl font-bold text-center py-2 lg:text-5xl lg:py-4 border-b-2 border-black">
          Cattle Feed
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100">
        {filteredProductList.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.name}
            description={product.title}
            onMoreInfo={`/product/cattle_feed/${product.name}`}
          />
        ))}
      </div>
    </>
  );
};

export default CattleFeed;
