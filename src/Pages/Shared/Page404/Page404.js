import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../../Images/img4o4.png'

const Page404 = () => {
    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: `url(${img404})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 mt-10 text-5xl font-bold">' Page Not Found '</h1>
                    <p className="mb-5">Oppss... Something wrong, Back to Home page.</p>
                    <Link to='/'><button className="btn btn-outline mb-10">BACK TO HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;