import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorkBento from "@/components/SelectedWorkBento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SelectedWorkBento />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
