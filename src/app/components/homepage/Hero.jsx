"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

export default function Hero() {
  return (
    <div className="mt-6">
      <Swiper  pagination={true} autoplay={{ delay: 3000, disableOnInteraction: false, }}
        loop={true} modules={[Navigation, Pagination, Autoplay]}className=" overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[500px] md:h-[900px] w-full">
            <Image
              src={slider1}
              alt="slider"
              fill
              className="object-cover"
            />

        
           

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className=" container mx-auto px-6">
                <div className="max-w-xl text-white">
                  <p className="mb-3 text-lg font-medium text-cyan-300">
                    Trusted Healthcare
                  </p>

                  <h1 className="text-black mb-5 text-4xl md:text-8xl font-bold leading-tight">
                    Your Health <br />
                    Our Priority
                  </h1>

                  <p className="mb-6 text-base md:text-lg text-black">
                    Book appointments with experienced doctors and get quality healthcare anytime.
                  </p>

                  <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

           {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[500px] md:h-[900px] w-full">
            <Image
              src={slider2}
              alt="slider"
              fill
              className="object-cover"
            />

           
           

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className=" container mx-auto px-6">
                <div className="max-w-xl text-white">
                  <p className="mb-3 text-lg font-medium text-cyan-300">
                    Expert Doctors
                  </p>

                  <h1 className="text-black mb-5 text-4xl md:text-8xl font-bold leading-tight">
                    Experienced Doctors <br />
                   
                  </h1>

                  <p className="mb-6 text-base md:text-lg text-black">
                    Connect with specialist doctors and receive world-class treatment services.
                  </p>

                  <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

          {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[500px] md:h-[900px] w-full">
            <Image
              src={slider3}
              alt="slider"
              fill
              className="object-cover"
            />

         

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className=" container mx-auto px-6">
                <div className="max-w-xl text-white">
                  <p className="mb-3 text-lg font-medium text-cyan-300">
                    Fast Appointment
                  </p>

                  <h1 className="text-black mb-5 text-4xl md:text-8xl font-bold leading-tight">
                     Book An Appointment <br />
                    
                  </h1>

                  <p className="mb-6 text-base md:text-lg text-black">
                    Save your time and schedule appointments easily from your home.
                  </p>

                  <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

    
      </Swiper>
    </div>
  );
}