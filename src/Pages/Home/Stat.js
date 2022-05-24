import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';

const Stat = () => {
    return (
        <div className='my-10 px-10'>
            <h2 className="text-3xl text-5xl text-cyan-400 font-bold text-center mb-5">Our Business Summary</h2>
            <div className='flex justify-between text-white bg-cyan-400 py-7 px-10 rounded-xl'>
                <div className=''>
                    <IoIosPeople className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>500k+</h2>
                    <h2 className='text-xl font-bold'>Customers</h2>
                </div>
                <div className=''>
                    <BiDollarCircle className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>200M+</h2>
                    <h2 className='text-xl font-bold'>Annual revenue</h2>
                </div>
                <div className=''>
                    <MdReviews className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>43k+</h2>
                    <h2 className='text-xl font-bold'>Reviews</h2>
                </div>
                <div className=''>
                    <RiToolsFill className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>500+</h2>
                    <h2 className='text-xl font-bold'>Products</h2>
                </div>
            </div>
        </div>
    );
};

export default Stat;