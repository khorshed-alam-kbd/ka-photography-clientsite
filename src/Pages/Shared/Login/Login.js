import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import swal from 'sweetalert';
import loginImg from '../../../Images/loginImg.png'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../hook/useTitle';

const Login = () => {
    const { providerLogin, logIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useTitle('Login');

    const from = location.state?.from?.pathname || '/'

    const Alert = () => {
        swal({
            title: "Congratulations",
            text: "You are successfully Login in ka photography",
            icon: "success",
            button: "Done",
        });
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        logIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email,

                }
                fetch('https://ka-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        form.reset();
                        localStorage.setItem('ka-photography', data.token)
                        navigate(from, { replace: true });
                        Alert();

                    })

            })
            .catch(error => {
                console.error(error)
                setError('Email or Password is wrong, Please Enter Correct email or password !')
                form.reset();
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                Alert();
            })
            .catch(error => console.error(error))
    }
    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        console.log('clicked')
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                Alert();
            })
            .catch(error => console.error(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center mx-10">
                    <h1 className="text-xl font-bold"> KA PHOTOGRAPHY</h1>
                    <h1 className="text-3xl font-bold mb-5">Login Now</h1>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmitLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <p>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Login</button>
                            </div>
                            <p >Don't have an account? <Link to='/register' className='text-blue-500'>Registration Now</Link> </p>
                        </div>
                    </Form>

                    <div className='text-center mb-5'>
                        <p className=''>or</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success mr-5">Google</button>
                        <button onClick={handleGitHubSignIn} className="btn btn-outline btn-info">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;