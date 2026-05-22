"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }

    router.push(`/doctors?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto mb-10">
      <div className="flex items-center bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="pl-5 text-slate-400">
          <CiSearch className="w-6 h-6" />
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="searchTerm"
          placeholder="Search doctor by name, specialty..."
          className="flex-1 h-16 px-4 text-lg border-0 focus:border-0 focus:outline-none focus:ring-0 bg-transparent placeholder:text-slate-400"
        />

        <button className="h-12 px-8 mr-2 rounded-xl bg-[#1762DC] text-white font-semibold">
          Search
        </button>
      </div>
    </form>
  );
}