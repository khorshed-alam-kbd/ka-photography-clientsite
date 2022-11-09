import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import ServicesCard from './ServicesCard/ServicesCard';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='text-center my-10 '>
                <p className='text-5xl font-semibold mb-5'>Discover our Services</p>
                <p>We have complete wedding photo shoot packages from pre-wedding photography <br /> to holud wedding photography, couple photography, bridal photo shoot.</p>
            </div>
            <ServicesCard></ServicesCard>
            <div className='text-center my-10'>
                <Link to='/services'><button className="btn btn-outline">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;