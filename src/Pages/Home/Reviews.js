import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ home }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://medz-app.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-5xl text-cyan-500 font-bold text-center my-5">Our Customers Review</h2>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 '>
                {
                    home ?
                        reviews.slice(-3).reverse().map(rView => <Review
                            key={rView._id}
                            rView={rView}
                        ></Review>)
                        :
                        reviews.map(rView => <Review
                            key={rView._id}
                            rView={rView}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;