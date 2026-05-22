"use client";

import { useEffect, useState } from "react";

import {
  FaRegUser,
  FaRegCalendarAlt,
  FaClock,
  FaTrash,
} from "react-icons/fa";

import { FiEdit } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";

import { authClient } from "@/lib/auth-client";

export default function MyBookings() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.id) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking/${user.id}`
      );

      const data = await res.json();

      setBookings(data);
    };

    fetchBookings();
  }, [user]);

  const handleCancleBooking = async (bookingId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${bookingId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    console.log(data);

    if (data.deletedCount > 0) {
      const remainingBookings = bookings.filter(
        (booking) => booking._id !== bookingId
      );

      setBookings(remainingBookings);
    }
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-md"
          >
            <h3 className="mb-4 text-lg font-bold text-teal-700">
              {booking.doctorName}
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <FaRegUser className="text-cyan-600" />
                {booking.patientName}
              </p>

              <p className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-cyan-600" />
                {booking.appointmentDate}
              </p>

              <p className="flex items-center gap-2">
                <FaClock className="text-cyan-600" />
                {booking.appointmentTime}
              </p>

              <p className="flex items-center gap-2">
                <MdEmail className="text-cyan-600" />
                {booking.patientEmail}
              </p>

              <p className="flex items-center gap-2">
                <CiStickyNote className="text-cyan-600" />
                {booking.reason}
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition">
                <FiEdit />
                Update
              </button>

              <button
                onClick={() => handleCancleBooking(booking._id)}
                className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition"
              >
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}