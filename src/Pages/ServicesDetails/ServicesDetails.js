import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import AddReview from '../Shared/AddReview/AddReview';
import ServicesDetailsCard from './ServicesDetailsCard/ServicesDetailsCard';
import ServicesDetailsReview from './ServicesDetailsReview/ServicesDetailsReview';

const ServicesDetails = () => {
    const services = useLoaderData();
    const [reviews, setReviews] = useState([])
    const { _id } = services;

    useTitle('ServicesDetails');

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);

    return (
        <div>
            <ServicesDetailsCard
                key={services.services_id}
                services={services}
            ></ServicesDetailsCard>
            <div className='glass'>
                {
                    reviews.map(review => <ServicesDetailsReview
                        key={review._id}
                        review={review}
                    ></ServicesDetailsReview>)
                }
                <AddReview
                    key={services.services_id}
                    services={services}
                ></AddReview>
            </div>
            <div className='text-center'>
                <Link to='/reviews/'><button className="btn btn-outline mb-10">MY ALL REVIEW</button></Link>
            </div>
        </div>
    );
};

export default ServicesDetails;