'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Card from '@/components/Card';

const Page = () => {
    const [blog, setBlog] = useState([]);
    const [error, setError] = useState("");
    const { data: session, status } = useSession();

    useEffect(() => {
        const getBlogData = async () => {
            if (status === 'authenticated' && session) {
                try {
                    const res = await fetch(`/api/blogs?userid=${session.user.id}`);
                    const result = await res.json();
                    console.log(result)
                    if(result){
                        setBlog(result)
                        setError('');
                    } else {
                        setError('No blogs found');
                    }
                } catch (err) {
                    setError('An error occurred while fetching data');
                }
            } else {
                setError('Please log in');
            }
        };

        getBlogData();

    }, [status, session]);

    return (
        <div className="my-5 m-10">
            <h1 className="text-3xl font-extrabold text-blue-500">My Blog Posts</h1>
    {error && <p className="text-red-500">{error}</p>}
    {blog.length > 0 ? (
        blog.map(item => (
            <Card key={item._id} title={item.title} content={item.content} id={item._id}/>
        ))
    ) : (
        <p className="mt-5">No blogs found</p>
    )}
</div>

    );
};

export default Page;
