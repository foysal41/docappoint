import Image from "next/image";
import Hero from "./components/homepage/Hero";
import TopDoctors from "./components/homepage/TopDoctors";
import WhyChooseUs from "./components/homepage/WhyChooseUs";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <TopDoctors></TopDoctors>
    <WhyChooseUs></WhyChooseUs>
    
   </div>
  );
}
