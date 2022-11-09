import React, { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import swal from 'sweetalert';
import registrationImg from '../../../Images/registration.png'

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmitRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoURL = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError('Error: password should be 6 characters or more')
            return;
        }
        console.log('clicked', name)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                swal({
                    title: "Congratulations",
                    text: `You are successfully registered in Ka Photography`,
                    icon: "success",
                    button: "Done",
                });
                form.reset();
                navigate('/')
                setError('');
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                swal({
                    title: "Opps !!",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try Again",
                });
            });

    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mx-10">
                    {/* <h1 className="text-xl font-bold"> KA PHOTOGRAPHY</h1> */}
                    <h1 className="text-3xl font-bold mb-5">Register Now</h1>
                    <img src={registrationImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmitRegistration} >
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photoUrl' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            </div>
                            <p className=''>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Register</button>
                            </div>
                            <p className='' >Already have an account? <Link to='/login' className='text-blue-500'>Login</Link> </p>
                        </div>
                    </Form>


                </div>
            </div>
        </div>
    );
};

export default Register;