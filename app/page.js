'use client'
import { connectDB } from "@/utils/db";
import {useSession,signIn,signOut } from 'next-auth/react'
export default function Home() {
  return (
    <>
      <h1>HOMEPAGE</h1>
      <h2>SignIn with google</h2>
      <button onClick={()=>signIn('google')}>signIn</button>
      <button onClick={()=>signOut()}>signOut</button>
    </>
  );
}

