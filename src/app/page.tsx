import AppPreview from "@/components/AppPreview";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TargetUsers from "@/components/TargetUsers";
import WhyPharmly from "@/components/WhyPharmly";

export default function Home() {
  return (
    <div className="">
    <Navbar/>
    <Hero />
    <WhyPharmly/>
    <TargetUsers/>
    <AppPreview/>
    <ContactUs/>
    <Footer/>
    </div>

  );
}
