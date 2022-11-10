import React from 'react';
import ServicesDetailsCard from './ServicesDetailsCard/ServicesDetailsCard';
import ServicesDetailsReview from './ServicesDetailsReview/ServicesDetailsReview';

const ServicesDetails = (services) => {
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