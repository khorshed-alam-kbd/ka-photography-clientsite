import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
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

    const handleDeleteReview = (id) => {

        swal({
            title: "Are you sure?",
            text: "To delete your review on this service !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/reviews/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Your Review Deleted Successfully", {
                                    icon: "success",
                                });
                                const remaining = reviews.filter(review => review._id !== id);
                                setReviews(remaining);

                            }
                        });


                }
            });

    }

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
                        handleDeleteReview={handleDeleteReview}
                    ></MyReview>)
                }
            </div>

        </div>
    );
};

export default MyAllReviews;