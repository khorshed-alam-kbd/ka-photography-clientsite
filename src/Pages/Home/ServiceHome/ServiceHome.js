import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../Shared/ServicesCard/ServicesCard';

const ServiceHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/3')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div className='mx-5'>
            <div className='text-center my-10'>
                <p className='font-semibold'>SERVICES</p>
                <p className='text-5xl font-semibold mb-5'>Explore our Services</p>
                <p>We have complete wedding photo shoot packages from pre-wedding photography <br /> to holud wedding photography, couple photography, bridal photo shoot.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(services => <ServicesCard
                        key={services.services_id}
                        services={services}
                    ></ServicesCard>)

                }
            </div>
            <div className='text-center my-10'>
                <Link to='/services'><button className="btn btn-outline">See All</button></Link>
            </div>
        </div>
    );
};

export default ServiceHome;