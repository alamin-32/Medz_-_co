import React from 'react';

const Review = ({ rView }) => {
    const { name, review, email } = rView
    return (
        <div className='my-10 mx-auto'>
            <div className="avatar ">
                <div className="w-24 ml-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" />
                </div>
            </div>
            <div className="card w-96 mt-1 bg-cyan-400 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold uppercase">{name}</h2>
                    <h2 className="card-title">{email}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;