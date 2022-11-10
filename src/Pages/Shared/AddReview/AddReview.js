import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddReview = ({ services }) => {
    const { user } = useContext(AuthContext);
    const { _id, title } = services;
    const successAlert = () => {
        swal({
            title: "Congratulations",
            text: "Your review successfully Added",
            icon: "success",
            button: "Done",
        });
    }
    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewMassage = form.reviewMassage.value;
        const rating = form.rating.value;
        const name = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;

        // console.log(review, rating, userName, userEmail, userPhotoURL, _id)

        const review = {
            service: _id,
            serviceName: title,
            userName: name,
            userEmail: email,
            UserPhotoURL: photoURL,
            review: reviewMassage,
            rating: rating

        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    successAlert();
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    const errorAlert = () => {
        swal({
            title: "Oppss!!",
            text: "To Review this services, You Have to Login First",
            icon: "error",
            button: "OK",
        });
    }
    return (
        <div className='my-10 p-10'>
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
                    <form onSubmit={handlePlaceReview}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Review :</span>
                            </label>
                            {
                                user?.uid ?
                                    <textarea name='reviewMassage' className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                                    :
                                    <textarea onClick={errorAlert} className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                            }
                        </div>
                        <div className='flex flex-row'>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text">Rating :</span>
                                </label>
                                <input type="text" name='rating' placeholder="Type here" className="input input-bordered max-w-xs" />
                            </div>
                            <div className='mt-5 text-center'>
                                {
                                    user?.uid ?
                                        <button className="btn btn-outline">REVIEW</button>
                                        :
                                        <Link to='/login'><button className="btn btn-outline">LOGIN</button></Link>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddReview;