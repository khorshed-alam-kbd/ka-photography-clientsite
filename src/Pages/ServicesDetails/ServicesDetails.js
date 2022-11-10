import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../Shared/AddReview/AddReview';
import ServicesDetailsCard from './ServicesDetailsCard/ServicesDetailsCard';
import ServicesDetailsReview from './ServicesDetailsReview/ServicesDetailsReview';

const ServicesDetails = () => {
    const services = useLoaderData();
    return (
        <div>
            <ServicesDetailsCard
                key={services.services_id}
                services={services}
            ></ServicesDetailsCard>
            <div className='glass'>
                <ServicesDetailsReview></ServicesDetailsReview>
                <ServicesDetailsReview></ServicesDetailsReview>
                <AddReview
                    key={services.services_id}
                    services={services}
                ></AddReview>
            </div>


        </div>
    );
};

export default ServicesDetails;