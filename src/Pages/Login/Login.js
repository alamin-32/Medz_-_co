import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center bg-gray-200 h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.email?.type === 'required' &&
                                    <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span class="label-text-alt text-red-700">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.password?.type === 'required' &&
                                    <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span class="label-text-alt text-red-700">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input className='btn w-full btn-outline max-w-xs text-white font-bold bg-cyan-400' value='Log In' type="submit" />
                    </form>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline bg-cyan-400 text-white font-bold">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;