import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
      <WhyChooseUs />
      <Footer />
    </>
  );
}