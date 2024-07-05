import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BlogCard = () => {
    const {session:data,status}= useSession();
    const [blogs,setblogs] = useState("")
    useEffect(()=>{
        if(status ==='authenticated'){
            const fetchblogs = async ()=>{
                const respose = await fetch("/api/blogs/userID=${session.user.id}")
                const result =await respose.json()
                if(result.ok){
                    setblogs(result.data)
                }
            }
        fetchblogs()
        }
    })
  return (
    <div>
      <h1>My Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BlogCard
