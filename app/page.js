'use client'
import { connectDB } from "@/utils/db";
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {
  return (
    <>
      <div className="searchbar relative flex w-full h-full items-center justify-center bg-cover bg-center" >
        <div className="relative flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 border border-gray-300 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          <img src="search.svg" alt="search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
        </div>
      </div>
    </>
  );
}

