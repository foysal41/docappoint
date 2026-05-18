export const fetchDoctors = async()=> {
    const res = await fetch(`http://localhost:8000/doctors`)
    const data = await res.json();
    return data || [];

}