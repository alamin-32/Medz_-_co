import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const ResetPass = () => {
    const [email, setEmail] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    let resetError;

    if (error) {
        resetError = <p className='text-red-600'><small>{error?.message}</small></p>
    }

    if (sending) {
        return <Loading></Loading>;
    }


    return (

        <div className='flex justify-center items-center bg-gray-200 py-20'>
            <div class="form-control w-full max-w-xs  ">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input onBlur={handleEmail} type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text-alt">{resetError}</span>
                </label>
                <button onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast("Password Send Successfully");
                }} type="submit"
                    className="btn btn-outline bg-cyan-400 text-white font-bold">Send</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResetPass;