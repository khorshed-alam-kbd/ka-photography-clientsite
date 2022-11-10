import React from 'react';
import Banner from './Banner/Banner';
import BestPhotography from './BestPhotography/BestPhotography';
import Process from './Process/Process';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <BestPhotography></BestPhotography>
            <Process></Process>
        </div>
    );
};

export default Home;