import React from 'react';
import useTitle from '../../hook/useTitle';


const MyReview = ({ review, handleDeleteReview }) => {
    const { _id, userName, userEmail, userPhotoURL, serviceName, reviewMassage, rating, } = review;
    useTitle('MyReview');

    return (
        <div className='p-10'>
            <div className='bg-black rounded-xl p-5'>
                <div className='flex flex-col md:flex-row lg:flex-row lg:items-center lg:justify-between '>
                    <div className='flex flex-row items-center '>
                        <div className="avatar online mr-5">
                            <div className="w-16 rounded-full">
                                <img src={userPhotoURL} alt='' />
                            </div>
                        </div>
                        <div>
                            <p className='text-xl font-semibold uppercase '>{userName}</p>
                            <p className='text-gray-500'>{userEmail}</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline mr-5 ">EDIT REVIEW</button>
                        <button onClick={() => handleDeleteReview(_id)} className="btn btn-outline">DELETE</button>
                    </div>
                </div>
                <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                    <p ><span className='font-semibold' >Package :</span><span className='text-gray-300'> {serviceName}</span></p>
                    <p className='my-3'><span className='font-semibold' >Review :</span><span className='text-gray-300'> {reviewMassage}</span></p>
                    <p><span className='font-semibold' >Rating :</span><span className='text-gray-300'> {rating} ★</span></p>
                </div>
            </div>
        </div >
    );
};

export default MyReview;