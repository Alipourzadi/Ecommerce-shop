import React, { useEffect, useState } from "react";

import CardSwiper from "./CardSwiper";
import Image from "next/image";
import ProductPrice from "./ProductPrice";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const [productPrice, setProductPrice] = useState(
    product.subProducts[active]?.sizes
      .map((size) => size.price)
      .sort((a, b) => a - b)
  );

  console.log(productPrice);

  const [productImages, setProductImages] = useState(
    product.subProducts[active]?.images
  );

  const [styles, setStyles] = useState(
    product.subProducts.map((product) => product.color)
  );

  useEffect(() => {
    setProductImages(product.subProducts[active]?.images);
    setProductPrice(
      product.subProducts[active]?.sizes
        .map((size) => size.price)
        .sort((a, b) => a - b)
    );
  }, [active, product.subProducts]);

  const activeProductHandler = (index) => {
    setActive(index);
  };

  return (
    <div className="relative w-60 h-[350px] shadow-sm space-y-1 border p-2">
      <a href={`/products/${product.slug}?style=${active}`}>
        <div className="w-full h-4/5">
          <CardSwiper images={productImages} />
        </div>
        {product.subProducts[active].discount != 0 && (
          <div className="absolute grid place-content-center border-2 border-white top-[2px] right-[2px] z-50 bg-[#5A31F4] w-10 h-10 rounded-full text-white text-sm">
            <p>%{product.subProducts[active].discount}-</p>
          </div>
        )}
      </a>
      <div className="h-1/5 text-left">
        <h1 className="text-gray-700 text-sm h-1/2">
          {product.name.length > 30
            ? `...${product.name.substring(0, 20)}`
            : `${product.name}`}
        </h1>
        <div className="flex items-center justify-between h-1/2">
          <ProductImage
            styles={styles}
            setActiveProduct={activeProductHandler}
          />
          <ProductPrice productPrice={productPrice} />
        </div>
      </div>
    </div>
  );
}
