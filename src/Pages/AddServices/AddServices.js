import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);
    const successAlert = () => {
        swal({
            title: "Congratulations",
            text: "Your Services Added successfully",
            icon: "success",
            button: "Done",
        });
    }

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const services_id = form.services_id.value;
        const title = form.title.value;
        const imgURL = form.imgURL.value;
        const descriptions = form.descriptions.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const name = user?.displayName;
        const email = user?.email;

        const services = {

            services_id: services_id,
            title: title,
            img: imgURL,
            descriptions: [descriptions],
            price: price,
            rating: rating,
            creatorName: name,
            creatorEmail: email,

        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
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
                    <form onSubmit={handleAddService}>
                        <div className='flex flex-row'>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text"> Services ID:</span>
                                </label>
                                <input type="text" name='services_id' placeholder="Type here" className="input input-bordered max-w-md" required />
                            </div>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text">Service Name:</span>
                                </label>
                                <input type="text" name='title' placeholder="Type here" className="input input-bordered max-w-xs" required />
                            </div>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text">Service Image:</span>
                                </label>
                                <input type="text" name='imgURL' placeholder="Enter Image URL" className="input input-bordered max-w-xs" required />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Descriptions:</span>
                            </label>
                            <textarea name='descriptions' className="textarea textarea-bordered h-24" placeholder="Type here" required></textarea>
                        </div>

                        <div className='flex flex-row'>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Service Price:</span>
                                </label>
                                <input type="text" name='price' placeholder="Type here" className="input input-bordered" required />
                            </div>
                            <div className=" w-full">
                                <label className="label">
                                    <span className="label-text">Service Rating:</span>
                                </label>
                                <input type="text" name='rating' placeholder="Type here" className="input input-bordered max-w-xs" required />
                            </div>
                            <div className='mt-5 text-center'>
                                <button className="btn btn-outline">ADD SERVICES</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddServices;