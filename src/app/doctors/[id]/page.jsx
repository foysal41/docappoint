import Image from "next/image";
import sectionBg from "@/assets/sectionBg.png";
import { MdStars } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  FaHospital,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const fetchSingleDoctor = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`, {
    headers: {
      authorization: token?.token ? `Bearer ${token.token}` : "",
    },
  });

  const data = await res.json();
  return data || {};
};

export default async function DoctorDetails({ params }) {
  const { id } = await params;
  const token = await auth.api.getToken({
    headers: await headers(),
  });
  //   const session = await auth.api.getSession({
  //   headers: await headers()

  // })
  // console.log(token)
  // console.log(session?.session?.token)

  const SingleDoctor = await fetchSingleDoctor(id, token);

  const {
    _id,
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
  } = SingleDoctor;

  return (
    <div
      className="pt-32 px-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <div className="flex flex-col md:flex-row justify-start items-center  gap-4">
        <div>
          <Image
            src={image}
            alt={name || "Doctor image"}
            height={500}
            width={500}
            className="object-cover rounded-md"
          />
        </div>

        <div>
          <h2 className="text-[45px] font-bold ">{name}</h2>
          <p className="text-[#23ADBE]">{specialty}</p>
          <div className="flex w-[40%] items-center mt-3 bg-[#23ADBE] gap-2 py-1 px-2 rounded-lg text-white">
            <MdStars />
            <p>{experience} year of exp</p>
          </div>
          <p className="mt-3">{description}</p>

          <div className="flex w-[40%] items-center mt-3 bg-[#23ADBE] gap-2 py-1 px-2 rounded-lg text-white">
            <SlCalender />
            <p className=" font-bold"> Availability </p>
          </div>

          <div className="flex flex-col gap-3 my-4">
            {availability?.map((time, index) => (
              <div
                key={index}
                className="flex w-fit items-center gap-3 rounded-xl bg-blue-100 px-4 py-3 text-blue-950 shadow-sm"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-600 text-sm">
                  🕒
                </span>

                <span className="font-semibold">{time}</span>
              </div>
            ))}
          </div>

          <Link href={"/"}>
            <button className="btn btn-info "> Book an Appointment </button>
          </Link>
        </div>
      </div>

      {/* Extra Info */}
      <div
        style={{ marginTop: "40px" }}
        className="mt-8 rounded-2xl bg-white p-6 shadow-md space-y-6"
      >
        {/* Hospital */}
        <div className="flex items-center justify-between  pb-4">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600 p-3 text-white">
              <FaHospital />
            </div>

            <h4 className="font-semibold text-gray-600">Hospital</h4>
          </div>

          <h4 className="font-bold text-blue-950">{hospital}</h4>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between  pb-4">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-teal-500 p-3 text-white">
              <FaCheck />
            </div>

            <h4 className="font-semibold text-gray-600">Location</h4>
          </div>

          <h4 className="font-bold text-blue-950">{location}</h4>
        </div>

        {/* Fee */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-indigo-500 p-3 text-white">
              <FaMoneyBillWave />
            </div>

            <h4 className="font-semibold text-gray-600">Consultation Fee</h4>
          </div>

          <h4 className="font-bold text-blue-950">৳{fee}</h4>
        </div>
      </div>
    </div>
  );
}
