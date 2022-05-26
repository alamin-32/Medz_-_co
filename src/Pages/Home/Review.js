import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ rView }) => {
    const { name, review, email } = rView
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='my-10 mx-auto'>
            <div class="avatar ">
                <div class="w-24 ml-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" />
                </div>
            </div>
            <div class="card w-96 mt-1 bg-cyan-400 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold uppercase">{name}</h2>
                    <h2 class="card-title">{email}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;