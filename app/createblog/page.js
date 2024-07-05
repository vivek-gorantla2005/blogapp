'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const { data: session } = useSession();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          userID: session?.user.id,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        toast.success('Blog post created successfully!', { autoClose: 1000 });
        setFormData({ title: '', content: '' });
        // You can redirect or show a success message here
      } else {
        toast.error('Failed to submit blog post.');
      }
    } catch (e) {
      console.error(e);
      toast.error('Failed to submit blog post. Please try again.');
    }
  };

  return (
    <>
    {session ? (
      <>
      <form className='flex flex-col gap-6 p-6 bg-gray-100 rounded-lg shadow-md h-full' onSubmit={handleSubmit}>
        <div className='flex flex-col mb-4'>
          <label className='mb-2 font-semibold text-gray-700' htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Title of Your Blog"
            className='p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='mb-2 font-semibold text-gray-700' htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
            placeholder="Create Your Blog Here"
            className='p-4 h-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button type="submit" className='self-start px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Submit
        </button>
      </form>
      <ToastContainer className="m-10"/>
      </>
    ):(
      <>
      {router.push("/")}
      </>
    )
  }
    </>
  );
};

export default Page;
