
import MyBookings from "../components/MyBookings";
import EditUser from "../components/EditUser";

export default function Dashboard() {
  return (
    <div className=" bg-[#F8FCFC] py-20 px-5 md:px-20 pt-32  ">
      <h1 className="mb-5 text-3xl font-bold text-slate-900">Dashboard</h1>

      <div className="mb-8 flex gap-2">
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow">
          My Bookings &   My Profile
        </button>
       
      </div>

  
        <MyBookings></MyBookings>


   <EditUser></EditUser> 






 
    </div>
  )
}
