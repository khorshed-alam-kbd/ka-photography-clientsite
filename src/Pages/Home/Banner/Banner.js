import React from 'react';
import bannerImg from '../../../Images/banner-img.jpg'

const Banner = () => {
    return (
        <div className="hero w-full max-h-fit" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 mt-10 text-5xl font-bold">' Make Your Wedding A Wonderful Story '</h1>
                    <p className="mb-5">Explore how we capture your holy bond of love and make the special day of your life even more special.</p>
                    <button className="btn btn-outline mb-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;