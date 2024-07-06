'use client'
import Link from "next/link";
import { connectDB } from "@/utils/db";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <>
            {session ? (
                <div className="flex justify-between m-auto gap-10 items-center">
                    <div className="logo flex gap-10">
                        <h1 className="font-bold text-2xl m-5"><Link href={"/"}>Bloogoo!!</Link></h1>
                        <div className="user flex items-center mr-2 gap-3">
                            <p className="text-lg font-bold">Welcome {session.user.name.toLowerCase()}!!</p>
                            {/* <p className="text-lg font-bold">Welcome {session.user.id}!!</p> */}
                            <img src={session.user.image} alt="user profile" className="w-10 h-10 rounded-full" />
                        </div>
                    </div>
                    <div className="content flex items-center mr-5 gap-10">
                    <button className="font-bold text-lg bg-black text-white mr-5 px-4 py-2 rounded-3xl hover:bg-gray-700" onClick={() => signIn('google')}>
                                Featured Content
                            </button>
                    <button className="font-bold text-lg bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-700" onClick={() => router.push("/myblogs")}>
                            MyBlogs
                        </button>
                        <button className="font-bold text-lg bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-700" onClick={() => router.push("/createblog")}>
                            Create Blog
                        </button>
                        <button className="font-bold text-lg bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-700" onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </div>
                </div>

            ) : (
                <>
                    <div className="flex justify-between m-auto gap-10 items-center">
                        <h1 className="font-bold text-2xl m-5"><Link href={"/"}>Bloogoo!!</Link></h1>
                        <div className="flex">
                            <button className="font-bold text-lg bg-black text-white mr-5 px-4 py-2 rounded-3xl hover:bg-gray-700" onClick={() => signIn('google')}>Sign In</button>
                            {/* <img src="user.svg" alt="" /> */}
                        </div>
                    </div>

                </>
            )
            }
        </>
    );
}
