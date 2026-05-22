import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaRegUser, FaRegCalendarAlt, FaClock, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";



export default async function MyBookings() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`,
  );
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="w-full max-w-xl rounded-2xl border border-cyan-100 bg-white p-6 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5justify-center items-center ">
        {bookings.map((booking, idx) => (
          <div key={idx}>
            <h3 className="mb-4 text-lg font-bold text-teal-700">
             {booking.doctorName}
            </h3>

            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <FaRegUser /> {booking.patientName}
              </p>
              <p className="flex items-center gap-2">
                <FaRegCalendarAlt /> {booking.appointmentDate}
              </p>
              <p className="flex items-center gap-2">
                <FaClock /> {booking.appointmentTime}
              </p>

               <p className="flex items-center gap-2">
                <MdEmail /> {booking.patientEmail}
              </p>

               <p className="flex items-center gap-2">
                <CiStickyNote /> {booking.reason}
              </p>
              
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold">
                <FiEdit /> Update
              </button>

              <button className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
