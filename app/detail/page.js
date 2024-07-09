'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const DetailPage = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    const id = searchParams.get('id');
    const decodedTitle = title ? atob(title) : '';
    const decodedContent = content ? atob(content) : '';
    const router = useRouter();
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [edit, setEdit] = useState(false);
    const [updatetitle, setupdatetitle] = useState(decodedTitle);
    const [updatecontent, setupdatecontent] = useState(decodedContent);

    const handleDeleteClick = () => {
        setShowDeletePopup(true);
    };

    const handleCancelDelete = () => {
        setShowDeletePopup(false);
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`/api/deleteblog?id=${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete blog');
            }
            router.push('/myblogs');
            router.reload();
            console.log('Blog deleted successfully');
        } catch (error) {
            console.error('Error deleting blog:', error.message);
        } finally {
            setShowDeletePopup(false);
        }
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/updateblog?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: updatetitle, content: updatecontent }),
            });

            if (!response.ok) {
                throw new Error('Failed to update blog');
            }
            if(response.ok){
                router.push('/myblogs')
            }
            setEdit(false);
            console.log('Blog updated successfully');
        } catch (error) {
            console.error('Error updating blog:', error.message);
        }
    };

    return (
        <div className="p-10">
            {!edit && (
                <>
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className="text-3xl font-bold">{decodedTitle}</h1>
                        <div className='flex gap-10 items-center'>
                            <div className='flex font-bold gap-1 items-center cursor-pointer' onClick={handleEdit}>
                                <p>Edit</p>
                                <img src="edit.svg" alt="edit" className='w-7 cursor-pointer' />
                            </div>
                            <div className='flex font-bold gap-1 items-center cursor-pointer' onClick={handleDeleteClick} >
                                <p>Delete</p>
                                <img src="delete.svg" alt="delete" className='w-7 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700">{decodedContent}</p>
                </>
            )}

            {edit && (
                <div className="formcontent m-5 flex flex-col gap-10">
                    <form className="space-y-6" onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="title" className="font-bold text-3xl">Edit Title:</label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500"
                                id="title"
                                type="text"
                                value={updatetitle}
                                onChange={(e) => setupdatetitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="font-bold text-3xl">Edit Content:</label>
                            <textarea
                                className="appearance-none block w-full h-64 bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500"
                                id="content"
                                value={updatecontent}
                                onChange={(e) => setupdatecontent(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-5">
                        <p className="text-xl font-bold mb-3">Are you sure you want to delete?</p>
                        <div className="flex justify-end gap-3">
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleConfirmDelete}>Delete</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailPage;
