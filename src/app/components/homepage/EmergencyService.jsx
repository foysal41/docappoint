import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import emergencyCar from "@/assets/emergency.webp";


export default function EmergencyService() {
  return (
    <div className=" py-20 px-5 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-around items-center gap-3">
        <div>
          <div className="flex items-center w-50 px-2 py-1 rounded-md justify-start gap-2 bg-red-200 text-red-800">
            <FaShippingFast color="red" />
            <span className="inline-block">247 Emergency Care</span>
          </div>

          <h2 className="text-[25px] md:text-[40px] font-bold">
            Emergency Services
          </h2>
          <p>
            Our emergency team is available 24/7 to provide quick and effective
            medical care when you need it most.
          </p>

          <div className="mt-3">
            <div className="flex justify-start items-center gap-1">
              <FaCheckCircle color="blue" />
              <p>24/7 Hours Support</p>
            </div>

            <div className="flex justify-start items-center gap-1">
              <FaCheckCircle color="blue" />
              <p>Quick Response</p>
            </div>

            <div className="flex justify-start items-center gap-1">
              <FaCheckCircle color="blue" />
              <p>Professional Medical Team </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={emergencyCar}
            alt="emergencyServer"
            height={512}
            width={512}
            className="rounded-md z-0 "
          ></Image>

          <div className="flex items-center gap-2 shadow-md w-80 px-2 py-2 rounded-md ml-20 -mt-8 bg-white absolute">
            <div className="px-2 py-2 rounded-full text-white">
              <Ri24HoursLine color="blue" size={60} />
            </div>

            <div >
              <h4 className="text-md font-bold text-2xl">+880 1234 567 890</h4>
              <p>Find Nearest Hospital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
