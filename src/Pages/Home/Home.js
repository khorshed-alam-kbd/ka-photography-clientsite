import React from 'react';
import useTitle from '../../hook/useTitle';
import Banner from './Banner/Banner';
import BestPhotography from './BestPhotography/BestPhotography';
import Process from './Process/Process';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    useTitle('Home');
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