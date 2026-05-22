import { fetchDoctors } from "@/lib/doctor/data";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign, FaToolbox } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import SearchBar from "../components/SearchBar";

// const doctors = await fetchDoctors(searchTerm);

export default async function DoctorArchive({searchParams}) {
  const sParams = await searchParams;

  const doctors = await fetchDoctors(sParams?.searchTerm || "");

  return (
    <div className="pt-32 px-10">
           
        <SearchBar></SearchBar>
       
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {doctors.map((item, idx) => (
          <div key={idx}>
            <Image
              src={item.image}
              alt="topDoctorOne"
              height={500}
              width={500}
              className="rounded-t-lg  object-cover"
            ></Image>
            <div className="shadow-md px-5 py-5 rounded-b-lg">
              <div className="text-center mb-5">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-[#1763DB]">{item.specialty}</p>
              </div>

              <hr className="text-black/20" />

              <div className="  flex justify-around items-center mt-4 ">
                <div className="flex justify-between items-center gap-2">
                  <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                    <FaToolbox size={20} />
                  </div>

                  <div>
                    <h4 className="text-md">Experience</h4>
                    {item.experience} Years
                  </div>
                </div>

                <div className="flex justify-between items-center gap-2">
                  <div className="bg-[#1763DB] px-2 py-2 rounded-full text-white">
                    <FaDollarSign size={20} />
                  </div>
                  <div>
                    <h4>Fee</h4>৳{item.fee}
                  </div>
                </div>
              </div>

              <Link href={`/doctors/${item._id}`}>
                <button className="w-full bg-[#1762DC] text-white py-2 mt-5 rounded-md font-bold flex items-center justify-center gap-3">
                  View Details <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
