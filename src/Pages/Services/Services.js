import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import ServicesCard from '../Shared/ServicesCard/ServicesCard';
import ServicesBanner from './ServicesBanner/ServicesBanner';

const Services = () => {
    const [services, setServices] = useState([]);

    useTitle('Services');

    useEffect(() => {
        fetch('https://ka-photography-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <div className='text-center my-10'>
                <p className='text-5xl font-semibold mb-5'>Choose our Packages</p>
                <p>At KA PHOTOGRAPHY, we have both budget wedding photographers and senior photographers to fulfill different clients’ wedding photography <br /> and cinematography needs. Here are our highly affordable wedding photography packages in Bangladesh</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-10'>
                {
                    services.map(services => <ServicesCard
                        key={services.services_id}
                        services={services}
                    ></ServicesCard>)

                }
            </div>
        </div>
    );
};

export default Services;