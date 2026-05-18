import React from "react";
import sectionBg from "@/assets/sectionBg.png";
import { PiUsersThree } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";


const chooseData = [
  {
    id: 1,
    title: "Experience Doctors",
    description:
      "Our team of highly qualified and experienced doctors is always ready to help you.",
    icon: <PiUsersThree size={40} color="#1762DC" />,
  },

  {
    id: 2,
    title: "Quality Treatment",
    description:
      "We provide the best quality treatment using modern technology.",
    icon: <PiUsersThree size={40} color="#1762DC" />,
  },

  {
    id: 3,
    title: "24/7 Support",
    description:
      "Our support team is available 24/7 to assist you anytime you need.",
    icon: <IoShieldCheckmarkOutline size={40} color="#1762DC" />,
  },

  {
    id: 4,
    title: "Easy Appointment",
    description:
      "Book appointments easily and quickly at your convenience.",
    icon: <MdOutlineDateRange size={40} color="#1762DC" />,
  },

  {
    id: 5,
    title: "Affordable Pricing",
    description:
      "We offer the best healthcare services at an affordable price for everyone.",
    icon: <MdOutlinePayments size={40} color="#1762DC" />,
  },

  {
    id: 6,
    title: "Patient Satisfaction",
    description:
      "Our top priority is patient satisfaction and quality care.",
    icon: <FaRegSmileBeam size={40} color="#1762DC" />,
  },
];



export default function whyChooseUs() {
  return (
    <div
      className="bg-cover bg-no-repeat  py-20 px-5 md:px-20 "
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-[25px] md:text-[40px] font-bold">
            Why Choose Us
          </h2>
          <p className="text-black/50">
            We are committed to providing the best healthcare services for you
            and your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-4 mt-5">
          {/* item 1 */}

          {
            chooseData.map((item, idx)=> (
                <div key={idx}>
            <div className="flex justify-start items-center gap-2 bg-white/40 py-2 px-3 border border-black/10 rounded-md">
              <div className="bg-[#EBF4FD] px-3 py-3 rounded-full text-white">
               {item.icon}
              </div>

              <div>
                <h4 className="text-md font-bold">{item.title}</h4>
                <p className="text-black/50">
                  
                  {item.description}
                </p>
              </div>
            </div>
          </div>    
            ))
          }
          

       
        </div>
      </div>
    </div>
  );
}
