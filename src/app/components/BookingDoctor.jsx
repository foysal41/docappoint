"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingDoctor({ SingleDoctor }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    _id,
    name,
    specialty,
    hospital,
    location,
    fee,
    availability,
  } = SingleDoctor;

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Please login first to book appointment.</p>;
  }

  const handleBooking = async (e) => {
    e.preventDefault();

    console.log("Booking button clicked");

    const form = e.target;

    const bookingData = {
      doctorId: _id,
      doctorName: name,
      specialty,
      hospital,
      location,
      fee,
      appointmentDate: form.appointmentDate.value,
      appointmentTime: selectedTime,
      patientName: form.patientName.value,
      patientEmail: form.patientEmail.value,
      patientPhone: form.patientPhone.value,
      userEmail: user?.email,
      userName: user?.name,
    };

    console.log("Booking Data:", bookingData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    console.log("Booking Response:", data);

    if (data?.insertedId) {
       toast.success("Booking successful");
      setOpenModal(false);
      form.reset();
      setSelectedTime("");
    } else {
      toast.error("Booking Failed");
    }
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="btn btn-info">
        Book an Appointment
      </button>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Book Appointment</h2>

              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="mb-4 rounded-xl bg-blue-50 p-4">
              <h3 className="font-bold">{name}</h3>
              <p className="text-blue-600">{specialty}</p>
              <p>Fee: ৳{fee}</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                name="patientName"
                defaultValue={user?.name || ""}
                placeholder="Your Name"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />

              <input
                type="email"
                name="patientEmail"
                defaultValue={user?.email || ""}
                placeholder="Your Email"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />

              <input
                type="text"
                name="patientPhone"
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />

              <input
                type="date"
                name="appointmentDate"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />

              <select
                required
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              >
                <option value="">Select Time</option>

                {availability?.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}