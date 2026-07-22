import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import DeliveryCoverage from "../components/DeliveryCoverage";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
      <WhyChooseUs />
      <DeliveryCoverage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}