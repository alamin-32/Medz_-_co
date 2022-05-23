import React from 'react';
import banner1 from '../../assets/images/banner1.webp'

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner1})`
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={chair} className="max-w-sm rounded-lg shadow-2xl " /> */}
                <div className='px-8 text-center'>
                    <h4 className="text-3xl text-cyan-600 font-bold">Medical Equipment</h4>
                    <h1 className="text-5xl mt-3 text-#555555 font-bold">For Physician & Medical</h1>
                    <h1 className="text-5xl mt-3 text-#555555 font-bold">Professional</h1>
                    <p className="py-6 font-bold text-xl ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase mt-8 text-white font-bold bg-gradient-to-r from-cyan-500 #05B4B6">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;