import React from "react";
import { Link } from "react-router-dom";
import regulerProduct from "../product/ProductItem/RegularItem.json";

const mostSaleProduct = regulerProduct.filter((item) => item.mostSaleProduct);

const ImageGrid = () => {
  return (
    <section className="container mx-auto px-4 py-2 sm:py-8" id="products">
      <h1 className="text-3xl font-bold text-center py-2 lg:text-5xl lg:py-4">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 lg:m-10 rounded-3xl">
        {mostSaleProduct.map((item, index) => (
          <div key={index} className="overflow-hidden">
            
            <img
              src={item.image}
              alt={item.name}
              className="object-cover shadow-md rounded-t-3xl"
            />
            <button className="w-full rounded-b-3xl h-16 bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-green-900 text-3xl">
              <Link to={`/product/${item.name}`}>{item.name}</Link>
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <Link
          to="/product"
          className="bg-yellow-700 rounded-lg sm:p-4 p-3 sm:text-3xl text-2xl sm:font-bold font-semibold"
        >
          More Product &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ImageGrid;
