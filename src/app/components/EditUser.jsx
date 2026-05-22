import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { MdEmail } from "react-icons/md";


export default function EditUser() {
  return (
    <div className="mt-10 w-full max-w-md rounded-2xl border border-cyan-100 bg-white p-6 shadow-md">
        <div className="flex items-center gap-4">
         <Image
  src="https://i.ibb.co.com/4pDNDk1/avatar.png"
  alt="profile"
  width={80}
  height={80}
  className="rounded-full object-cover"
/>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Ismotara</h3>
            <p className="flex items-center gap-2 text-sm text-slate-600">
              <MdEmail /> dipty.ph@gmail.com
            </p>
          </div>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-3 text-sm font-bold text-white">
          <FiEdit /> Update Profile
        </button>
      </div>
  )
}
