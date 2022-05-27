import React from 'react';
import mybg from '../../assets/images/mybg.png'

const MyPortfolio = () => {
    return (
        <div className='container mx-auto mb-10'>
            <h2 className='text-5xl my-10 text-center font-extrabold'>My Portfolio</h2>
            <div class="divider"></div>
            <div className='flex'>
                <div className=' text-start  py-5 rounded-lg'>
                    <h1 className='text-4xl font-extrabold mb-10'>My Information</h1>
                    <h2 className='text-xl font-semibold mt-2'><span className='font-bold'>Name:</span> Md. Al-Amin Hossain</h2>
                    <h2 className='text-xl font-semibold mt-2'><span className='font-bold'>Email:</span> alaminhussain32@gmail.com</h2>
                    <h2 className='text-xl font-semibold mt-2'><span className='font-bold'>Education:</span> BSC in CSE (Tejgaon College)</h2>
                    <h2 className='text-xl mt-2'><span className='font-bold'>Skilled on:</span> React Js, Node Js, Express Js, Mongodb, Tailwind, CSS, HTML, Bootstrap, Firebase, Netlify, Heroku.</h2>
                    <div className='text-start  py-10'>
                        <h2 className='text-4xl font-extrabold mb-4'>My Projects</h2>
                        <p className='font-bold my-2'>Project-1 Link : <a className='text-blue-600' href="https://assignment-11-3a56a.web.app">Heisenberg & Co</a></p>
                        <p className='font-bold my-2'>Project-2 Link: <a className='text-blue-600' href="https://assignment-10-8e337.web.app">On Go </a></p>
                        <p className='font-bold my-2'>Project-3 Link: <a className='text-blue-600' href="https://prismatic-kitten-9ab232.netlify.app/">Ice Store</a></p>
                        <p>Im'a one step away to be a junior web developer and still learning about web. My journey in learning web development was excellent and i will further continue to know about more.</p>
                    </div>
                </div>
                <h1><img src={mybg} alt="" /></h1>
            </div>
        </div>
    );
};

export default MyPortfolio;