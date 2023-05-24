import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AppLayout({ children, countryDetail }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header country={countryDetail} />
      <div className="border-box font-yekanMedium">{children}</div>
      <Footer />
    </main>
  );
}
