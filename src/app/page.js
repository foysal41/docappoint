import Image from "next/image";
import Hero from "./components/homepage/Hero";
import TopDoctors from "./components/homepage/TopDoctors";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import Testimonial from "./components/homepage/Testimonial";
import EmergencyService from "./components/homepage/EmergencyService";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <TopDoctors></TopDoctors>
    <WhyChooseUs></WhyChooseUs>
    <Testimonial></Testimonial>
    <EmergencyService></EmergencyService>
    
   </div>
  );
}
