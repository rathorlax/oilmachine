import React from "react";
import ProductCard from "./ProductCard";
import regulerProduct from "./ProductItem/RegularItem.json";

const filteredProductList = regulerProduct.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const Product = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center py-2 lg:text-5xl lg:py-4 border-b-2 border-black">
          Products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100">
        {filteredProductList.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.name}
            description={product.title}
            onMoreInfo={`/product/${product.name}`}
          />
        ))}
       
      </div>
    </>
  );
};

export default Product;
