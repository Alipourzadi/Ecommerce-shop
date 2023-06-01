import Product from "@/models/product";
import db from "@/utils/db";
import React from "react";

export default function product() {
  return <div>Hello</div>;
}

export async function getServerSideProps({ context }) {
  const { query } = context;
  const { slug, style, size } = query;

  db.connectDb;
  const product = await Product.findOne({ slug }).lean();
  const subProduct = product.subProducts[style];
  const productPrices = subProduct.sizes
    .map((size) => size.price)
    .sort((a, b) => a - b);

  const newProduct = {
    ...product,
    images: subProduct.images,
    size: subProduct.size,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: subProduct.map((product) => product.color),
    prices:
      productPrices.length == 1
        ? `${productPrices[0]}`
        : `${productPrices[0]}-${productPrices[length - 1]} تومان`,
    price: "",
  };
}
