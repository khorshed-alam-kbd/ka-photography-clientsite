import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReview from './MyReview';

const MyAllReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='glass'>
            <div className='text-center pt-5'>
                <p className='text-3xl font-semibold'>Your Total Review Is : {reviews.length}</p>
            </div>
            <div className='my-5'>
                {
                    reviews.map(review => <MyReview
                        key={review._id}
                        review={review}
                    ></MyReview>)
                }
            </div>

        </div>
    );
};

export default MyAllReviews;