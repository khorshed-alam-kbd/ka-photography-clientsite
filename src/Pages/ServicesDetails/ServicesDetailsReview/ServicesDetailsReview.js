import React from 'react';

const ServicesDetailsReview = () => {
    return (
        <div className='my-10 p-10'>
            <div className='bg-black rounded-xl p-5'>
                <div className='flex flex-row items-center '>
                    <div className="avatar online mr-5">
                        <div className="w-16 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold uppercase '>MD. KHORSHED ALAM</p>
                        <p className='text-gray-500'> khorshedalam.kbd@gmail.com </p>
                    </div>
                </div>
                <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                    <p className='font-semibold'>Review :</p>
                    <p className='text-gray-300 break-all'>hdjsflsadfnadlsfnvladlfvjjhdjsflsadfnadlsfnvladlfvj adfvadflvadnfvladflvnaldfjhdjsflsadfnadlsfnvladlfvj adfvadflvadnfvladflvnaldfjhdjsflsadfnadlsfnvladlfvj adfvadflvadnfvladflvnaldfjhdjsflsadfnadlsfnvladlfvj adfvadflvadnfvladflvnaldfjhdjsflsadfnadlsfnvladlfvj adfvadflvadnfvladflvnaldf adfvadflvadnfvladflvnaldf</p>
                    <p className='mt-3'><span className='font-semibold' >Rating :</span><span className='text-gray-300'> 4.9 ★</span></p>
                </div>
            </div>
        </div >
    );
};

export default ServicesDetailsReview;