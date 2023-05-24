import React from "react";
import CategoryItem from "./CategoryItem";
import { dressesCategory, women_accessories, women_shoes } from "@/data/home";

export default function index() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <CategoryItem header="لباس" items={dressesCategory} />
      <CategoryItem header="کفش" items={women_shoes} />
      <CategoryItem header="زیورالات" items={women_accessories} />
      {/* <CategoryItem header="Shoes / Bag" items={""} />
      <CategoryItem header="Accessories" items={""} /> */}
    </div>
  );
}
