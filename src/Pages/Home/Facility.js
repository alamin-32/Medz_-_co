import React from 'react';
import min1 from '../../assets/images/min1.webp'
import min2 from '../../assets/images/min2.webp'
import min3 from '../../assets/images/min3.webp'

const Facility = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-8'>
            <div class="card lg:card-side bg-base-100 shadow-xl px-14 bg-cyan-100">
                <figure><img className='flex justify-center items-center' src={min1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-center font-bold">Free Shipping</h2>
                    <p className='font-semibold'>For orders over $50</p>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl px-10 py-1 bg-cyan-100">
                <figure><img src={min2} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-center font-bold">Official Discounts</h2>
                    <p className='font-semibold'>Save big on next product</p>
                </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl px-14 bg-cyan-100">
                <figure><img src={min3} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-center font-bold">24/7 Helpline</h2>
                    <p className='font-semibold'>Care till the end</p>
                </div>
            </div>
        </div>
    );
};

export default Facility;