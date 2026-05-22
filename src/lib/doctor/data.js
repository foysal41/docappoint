export const fetchDoctors = async(searchTerm = "")=> {
     const res = await fetch(`http://localhost:8000/doctors?search=${searchTerm}`);
    const data = await res.json();
    return data || [];

}