import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import regulerProduct from "./ProductItem/RegularItem.json";
import cattleFeed from "./ProductItem/CattleFeed.json";
import ImageSwipe from "./ImageSwipe";

const allItem = regulerProduct.concat(cattleFeed);

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const product = allItem.find((item) => item.name === name);


  const optionalPacking = () => {
    if (product.optionalPacking) {
      return (
        <h4 className="text-red-500">
          *Other Product are available on demand!
        </h4>
      );
    }
    return null;
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md">
        <div className="flex flex-col md:flex-row mb-8">
          <ImageSwipe
            images={product.package[currentImage].images}
            name={`${product.name} ${product.package[currentImage].quantity}`}
          />
          <div className=" flex flex-col justify-evenly items-center md:pl-8">
            <h1 className="text-4xl font-semibold uppercase text-gray-800">
              {product.name}
            </h1>
            <div className="mt-4 grid grid-cols-4 gap-4 w-full">
              {product.package.map((pkg, index) => (
                <button
                  onClick={() => setCurrentImage(index)}
                  key={index}
                  className="bg-gray-200 h-[48px] rounded px-1 text-gray-700"
                >
                  {pkg.quantity}
                </button>
              ))}
            </div>
            {optionalPacking()}
          </div>
        </div>

        <div className="mb-6 text-justify border-b-2 border-black pb-4">
          <h1 className="text-2xl font-semibold text-gray-700">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            {product.shortDescription}
          </p>
        </div>

        <div className="mb-6 text-justify border-b-2 border-black pb-4">
          <h2 className="text-[20px] font-semibold mb-3 text-gray-700">
            {product.longDescription.title1}
          </h2>
          {product.longDescription.description1.map((desc, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong className="text-xl font-medium text-gray-800">
                  {`${index + 1}. ${desc.title}`}
                </strong>{" "}
                : <span className="text-lg text-gray-600">{desc.text}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6 border-b-2 border-black pb-4">
          <h2 className="text-[20px] font-semibold mb-3 text-gray-700">
            {product.longDescription.title2}
          </h2>
          {product.longDescription.description2.map((desc, index) => (
            <div key={index} className="mb-4">
              <li>
                <strong className="text-xl font-medium text-gray-800">
                  {`${desc.title}`}
                </strong>{" "}
                : <span className="text-lg text-gray-600">{desc.text}</span>
              </li>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg italic text-gray-700">{product.conclusion}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
