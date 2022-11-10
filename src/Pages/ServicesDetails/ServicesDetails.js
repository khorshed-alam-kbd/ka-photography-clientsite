import React from 'react';
import { useLoaderData } from 'react-router-dom';
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

            <ServicesDetailsReview></ServicesDetailsReview>

        </div>
    );
};

export default ServicesDetails;