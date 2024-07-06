import React, { useState } from 'react';

const Card = ({ title, content }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='flex justify-between gap-5'>
            <div className="my-5 p-5">
                <h2 className="text-xl font-bold mb-2">TITLE: {title}</h2>
                <p className="text-gray-600">{content}</p>
            </div>
            <div className='flex gap-5 items-center '>
                <div className="likes flex gap-1"><img src="like.svg" alt="like"/>0</div>
                <div className="dislikes flex gap-1"><img src="dislike.svg" alt="dislike" />0</div>
                <div className="comments flex gap-1 cursor-pointer" onClick={openPopup}><img src="comments.svg" alt="comment" />0</div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/2 h-1/2">
                        <div className="flex justify-between items-center p-5">
                            <h2 className="text-2xl font-bold">Comments</h2>
                            <img src="close.svg" className="cursor-pointer" onClick={closePopup} alt="close" />
                        </div>
                        <div className="p-5">
                            <p className="text-gray-600">Comment 1</p>
                            <p className="text-gray-600">Comment 2</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
