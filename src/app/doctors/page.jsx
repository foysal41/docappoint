import Image from "next/image";
import Link from "next/link";


const fetchDoctors = async()=> {
    const res = await fetch(`http://localhost:8000/doctors`)
    const data = await res.json();
    return data || [];

}

export default async function DoctorArchive() {
    const doctors = await fetchDoctors();
   
  return (
    <div className="pt-32 px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        {
            doctors.map((item, idx)=>(
                <div key={idx}>
                    <h3>{item.name}</h3>
                    <Image src={item.image} alt="he" height={100} width={100} ></Image>
                    <Link href={`/doctors/${item._id}`}>View</Link>
                </div>
            ))
        }
    </div>   
       
    </div>
  )
}
