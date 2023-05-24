import Header from "./Header";
import Menu from "./Menu";
import OfferSwiper from "./OfferSwiper";
import SwiperContainer from "./SwiperContainer";
import User from "./User";

export default function index() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-[1fr_3fr]  lg:grid-cols-[1fr_3fr_1fr]  grid-rows-[0.75fr_4fr_2fr] sm:grid-rows-[2fr_1fr] md:grid-rows-[25px_3fr_1.5fr] lg:grid-rows-[0.5fr_4fr_2fr] h-[400px] md:h-[500px] gap-2">
      <Menu />
      <Header />
      <SwiperContainer />
      <User />
      <OfferSwiper />
    </div>
  );
}
