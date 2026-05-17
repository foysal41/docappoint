import topDoctor_1 from "@/assets/topDoctor_1.png";
import topDoctor_2 from "@/assets/topDoctor_2.png";
import topDoctor_3 from "@/assets/topDoctor_3.png";
import Image from "next/image";
import { FaToolbox } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";





export default function TopDoctors() {
  return (
    <div className="container mx-auto my-10 md:py-20 px-5 md:px-20 " >
        <div className="text-center"> 
            <h2 className="text-[25px] md:text-[40px] font-bold">Top Rated Doctors</h2>
            <p className="text-black/50">Meet Our qualified and experienced doctors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-4 ">
            <div>
                <Image src={topDoctor_1} alt="topDoctorOne" height={500} width={500} className="rounded-t-lg  object-cover"></Image>
                <div className="shadow-md px-5 py-5 rounded-b-lg">
                    <div className="text-center mb-5">
                        <h3 className="font-bold">Dr. Mahmud Hasan</h3>
                    <p className="text-[#1763DB]">Cardiologist</p>
                    </div>

                    <hr  className="text-black/20"/>

                    <div className="  flex justify-around items-center mt-4 ">
                        <div className="flex justify-between items-center gap-2">
                            <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaToolbox size={20} />
                            </div>
                          
                            <div>  
                                <h4 className="text-md">Experience</h4>
                                10+ Years
                            </div>
                        </div>

                         <div className="flex justify-between items-center gap-2">
                             <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaDollarSign  size={20} />
                            </div>
                            <div>  
                                <h4>Fee</h4>
                                $50
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#1762DC] text-white py-2 mt-5 rounded-md font-bold flex items-center justify-center gap-3">View Details <FaArrowRightLong /></button>
                </div>
                
            </div>

             <div>
                <Image src={topDoctor_2} alt="topDoctorOne" height={500} width={500} className="rounded-t-lg  object-cover"></Image>
                <div className="shadow-md px-5 py-5 rounded-b-lg">
                    <div className="text-center mb-5">
                        <h3 className="font-bold">Dr. Nusrat Jahan</h3>
                    <p className="text-[#1763DB]">Neurologist</p>
                    </div>

                    <hr  className="text-black/20"/>

                    <div className="  flex justify-around items-center mt-4 ">
                        <div className="flex justify-between items-center gap-2">
                            <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaToolbox size={20} />
                            </div>
                          
                            <div>  
                                <h4 className="text-md">Experience</h4>
                                8+ Years
                            </div>
                        </div>

                         <div className="flex justify-between items-center gap-2">
                             <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaDollarSign  size={20} />
                            </div>
                            <div>  
                                <h4>Fee</h4>
                                $45
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#1762DC] text-white py-2 mt-5 rounded-md font-bold flex items-center justify-center gap-3">View Details <FaArrowRightLong /></button>
                </div>
                
            </div>

             <div>
                <Image src={topDoctor_3} alt="topDoctorOne" height={500} width={500} className="rounded-t-lg  object-cover"></Image>
                <div className="shadow-md px-5 py-5 rounded-b-lg">
                    <div className="text-center mb-5">
                        <h3 className="font-bold">Dr. Rafiq Ahmed </h3>
                    <p className="text-[#1763DB]">Pulmonologist</p>
                    </div>

                    <hr  className="text-black/20"/>

                    <div className="  flex justify-around items-center mt-4 ">
                        <div className="flex justify-between items-center gap-2">
                            <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaToolbox size={20} />
                            </div>
                          
                            <div>  
                                <h4 className="text-md">Experience</h4>
                                12+ Years
                            </div>
                        </div>

                         <div className="flex justify-between items-center gap-2">
                             <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                                <FaDollarSign  size={20} />
                            </div>
                            <div>  
                                <h4>Fee</h4>
                                $40
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#1762DC] text-white py-2 mt-5 rounded-md font-bold flex items-center justify-center gap-3">View Details <FaArrowRightLong /></button>
                </div>
                
            </div>

            
        </div>
    </div>
  )
}
