import AppPreview from "@/components/AppPreview";
// import ContactUs from "@/components/ContactUs";
import DataPurpose from "@/components/DataPurpose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import TargetUsers from "@/components/TargetUsers";
import WhyPharmly from "@/components/WhyPharmly";
import WaitingList from "@/components/WaitingList";

export default function Home() {
  return (
    <div className="no-scrollbar h-sv hidden">
    <Navbar/>
    <Hero />
    <WhyPharmly/>
    {/* <TargetUsers/> */}
    <AppPreview/>
    <DataPurpose/>
    <WaitingList/>
    {/* <ContactUs/> */}
    <Footer/>
    </div>

  );
}
