import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const MyReview = () => {
    const [user] = useAuthState(auth);

    const handleReview = e => {
        e.preventDefault()
        const review = e.target.review.value;
        const data = {
            name: user.displayName,
            email: user.email,
            review: review
        }
        fetch('https://medz-app.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Review Successful")
                e.target.reset()
            })
    }


    return (
        <div>
            <div className='mr-10'>
                <div className="mx-10 mt-5">
                    <h2 className="text-3xl font-bold text-cyan-400 text-center ml-14">Your Review</h2>
                    <div className="">
                        <form onSubmit={handleReview}>
                            <div className="form-control font-bold w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered font-semibold w-full max-w-xs"
                                    value={user?.displayName}
                                    disabled
                                />
                            </div>
                            <div className="form-control font-bold w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered font-semibold w-full max-w-xs"
                                    value={user?.email}
                                    disabled
                                />
                            </div>

                            <div className="form-control w-full font-bold max-w-xs">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    className="textarea bg-slate-200"
                                    placeholder="Type here"
                                    name="review"
                                ></textarea>
                            </div>

                            <input className='btn w-full btn-outline max-w-xs text-white font-bold bg-cyan-400 mt-5' value='Submit' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;