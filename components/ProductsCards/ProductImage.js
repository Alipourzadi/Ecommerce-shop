import Image from "next/image";
import React from "react";

export default function ProductImage({ styles, setActiveProduct }) {
  const activeProductHandler = (index) => {
    setActiveProduct(index);
  };
  return (
    <div className="flex items-center ml-8 gap-1">
      {styles.map((style, idx) => (
        <Image
          key={idx}
          src={style.image}
          className={`rounded-full border-2 border-white object-cover w-7 h-7 cursor-pointer ${
            styles.length == 1
              ? ""
              : "-ml-3 hover:-ml-2 transition-all duration-75"
          } `}
          alt="product-category-image"
          width={30}
          height={30}
          quality={100}
          onMouseEnter={activeProductHandler.bind(null, idx)}
        />
      ))}
    </div>
  );
}
