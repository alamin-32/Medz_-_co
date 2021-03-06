import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../Hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let signInError;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-600'><small>{error?.message || gError.message}</small></p>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div style={{
            background: `url(https://media.istockphoto.com/vectors/healthcare-and-medicine-related-seamless-pattern-and-background-with-vector-id1207522002?k=20&m=1207522002&s=612x612&w=0&h=QYpte3zHiV8GKlUNXfUGrKfxGc_6_ys6-Wqn6YIDzCw=)`
        }} className='flex justify-center items-center bg-gray-200  h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body bg-slate-300">
                    <h2 className="text-center text-2xl font-bold">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                autoComplete='off'
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Insert a Valid Email Please'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                autoComplete='off'
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 characters requires "
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-700">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input className='btn w-full btn-outline max-w-xs text-white font-bold bg-cyan-400' value='Log In' autoComplete='off' type="submit" />
                    </form>
                    <p className='text-gray-600'>New to Medz? <Link className='text-cyan-600 font-semibold' to="/signup"> Create Account</Link></p>
                    <p className='text-gray-600'>Forgot Password? <Link className='text-cyan-600 font-semibold' to="/resetPass">Reset Password</Link></p>
                    {signInError}
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline bg-cyan-400 text-white font-bold">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;