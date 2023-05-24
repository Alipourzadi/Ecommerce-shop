import Ad from "./Ad";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Header({ country }) {
  return (
    <header className="h-full z-40">
      <Ad />
      <Navbar country={country} />
      <SearchBar />
    </header>
  );
}

export default Header;
