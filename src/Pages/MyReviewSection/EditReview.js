import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const EditReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const { reviewMassage, rating, } = review;
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReview(data));

    }, [id])
    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewMassage = form.reviewMassage.value;
        const rating = form.rating.value;
        const upReview = {
            reviewMassage: reviewMassage,
            rating: rating
        }
        console.log(upReview);

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    // successAlert();
                    // form.reset();
                    navigate('/reviews')
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className='glass p-10'>
            <div className='bg-black rounded-xl p-5'>
                {
                    user?.uid ?
                        <div className='flex flex-row items-center '>
                            <div className="avatar online mr-5">
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <div>
                                <p className='text-xl font-semibold uppercase '>{user?.displayName}</p>
                                <p className='text-gray-500'>{user?.email}</p>
                            </div>
                        </div>
                        :
                        <p></p>
                }
                <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                    <form onSubmit={handleUpdateReview}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Review :</span>
                            </label>
                            <textarea name='reviewMassage' className="textarea textarea-bordered h-24" defaultValue={reviewMassage} placeholder="Type here" required></textarea>
                        </div>
                        <div className='flex flex-row'>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input type="text" name='rating' defaultValue={rating} placeholder="Type here" className="input input-bordered max-w-xs" required />
                            </div>
                            <div className='mt-5 text-center'>
                                <button className="btn btn-outline">UPDATE REVIEW</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default EditReview;