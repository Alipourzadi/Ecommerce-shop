import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

import AppLayout from "@/components/Layout/AppLayout";
import Hero from "@/components/Home/Hero";
import FlashCard from "@/components/Home/FlashCard";
import Categories from "@/components/categories";
import GamingCategory from "@/components/GamingCategory/GamingCategory";
import WomenSwiper from "@/components/ProductsSwiper/WomenSwiper";
import HomeImprovment from "@/components/ProductsSwiper/HomeImprovment";
import ProductsCards from "@/components/ProductsCards";
import db from "@/utils/db";
import Product from "@/models/product";

export default function Home({ country, products }) {
  const { data: session } = useSession();

  const countryDetail = {
    name: country.name,
    flag: country.flag.emojitwo,
  };

  console.log(products);

  return (
    <AppLayout countryDetail={countryDetail}>
      <div style={{ direction: "rtl" }} className="max-w-7xl p-2 mx-auto">
        <Hero />
        <FlashCard />
        <Categories />
        <WomenSwiper className="bg-gradient-to-tl from-[#cda2ff] to-white" />
        <GamingCategory />
        <HomeImprovment className="from-gray-100 to-white" />
        <ProductsCards products={products} />
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  const products = await Product.find().sort({ createdAt: -1 }).lean();
  const data = await axios
    .get("https://api.ipregistry.co/?key=leg1me7htfimwwue")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: data,
    },
  };
}
