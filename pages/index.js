import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import AppLayout from "@/components/Layout/AppLayout";
import Hero from "@/components/Home/Hero";
import FlashCard from "@/components/Home/FlashCard";
import Categories from "@/components/categories";
import ProductsSwiper from "@/components/ProductsSwiper/ProductsSwiper";
import GamingCategory from "@/components/GamingCategory/GamingCategory";

export default function Home() {
  const { data: session } = useSession();
  const countryDetail = {
    // name: country.name,
    name: "Iran",
    // flag: country.flag.emojitwo,
    flag: "",
  };
  return (
    <AppLayout countryDetail={countryDetail}>
      <div style={{ direction: "rtl" }} className="max-w-7xl p-2 mx-auto ">
        <Hero />
        <FlashCard />
        <Categories />
        <ProductsSwiper />
        <GamingCategory />
      </div>
    </AppLayout>
  );
}

// export async function getServerSideProps() {
//   // const data = await axios
//   //   .get("https://api.ipregistry.co/?key=leg1me7htfimwwue")
//   //   .then((res) => {
//   //     return res.data.location.country;
//   //   })
//   //   .catch((err) => {
//   //     console.error(err);
//   //   });

//   return {
//     props: { country: data },
//   };
// }
