"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar, FaToolbox } from "react-icons/fa";
import Image from "next/image";

const feedbackData = [
  {
    id: 1,
    rating: 5,
    feedback:
      "The doctors were extremely professional and caring. Booking an appointment was very smooth and quick.",
    name: "Daniel Morgan",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },

  {
    id: 2,
    rating: 5,
    feedback:
      "I found a specialist within minutes. The whole process felt simple and stress free.",
    name: "Sophia Williams",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },

  {
    id: 3,
    rating: 4,
    feedback:
      "Excellent healthcare platform with a clean interface and fast appointment confirmation.",
    name: "James Carter",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },

  {
    id: 4,
    rating: 5,
    feedback:
      "The pediatric care was amazing. The doctor handled everything with patience and kindness.",
    name: "Emily Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
  },

  {
    id: 5,
    rating: 5,
    feedback:
      "Very trustworthy service with experienced doctors and transparent consultation fees.",
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400",
  },

  {
    id: 6,
    rating: 4,
    feedback:
      "Scheduling appointments has never been this easy. Everything works perfectly.",
    name: "Olivia Martinez",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-cover bg-no-repeat  py-20 px-5 md:px-20 ">
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-[25px] md:text-[40px] font-bold">
            What Patients Say
          </h2>
          <p className="text-black/50">
            Real reviews from people who trust DocAppoint.
          </p>
        </div>

          {/* item 1 */}

          <Swiper
          breakpoints={{
            0:{
                slidesPerView:1,
                 spaceBetween: 16,   
            },

            768:{
                slidesPerView:2,
                 spaceBetween: 20,   
            }, 

            1024: {
                slidesPerView:3,
                 spaceBetween: 24, 
            }

          }}
        
           slidesPerGroup={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            modules={[Autoplay]}
            className="overflow-hidden mt-4"
          >

            {
                feedbackData.map((item, idx)=> (
                    <SwiperSlide key={idx}>
                     <div className="border   border-black/10 rounded-md px-4 py-4 ">
            {/* Row one */}
            <div className="flex justify-between items-center">
              <RiDoubleQuotesL size={40} color="#A6C3F3" />

              <div className="flex justify-between items-center">
                <span>{item.rating}</span>
                <FaStar size={20} color="yellow" />
              </div>
            </div>

            {/* Row Two */}
            <p className="mt-3">
              The doctors were extremely professional and caring. Booking an
              appointment was very smooth and quick.
            </p>

            {/*  Row Three */}

            <div className="mt-3">
              <div className="flex  items-center gap-2">             
                  <Image src={item.image} alt="name" height={30} width={30} className="h-[30px] w-[30px] rounded-full"></Image>

                <div>
                  <h4 className="text-md font-bold">{item.name}</h4>
                  Patient
                </div>
              </div>
            </div>
          </div>
            </SwiperSlide>    
                ))
            }
            

            
          </Swiper>
        
      </div>
    </div>
  );
}
