import AboutUs from "@/components/sub/AboutUs";
import ContactUs from "@/components/sub/ContactUs";
import Footer from "@/components/main/Footer";
import Hero from "@/components/sub/Hero";
import Navbar from "@/components/main/Navbar";
import TechStack from "@/components/sub/TechStack";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <TechStack />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
