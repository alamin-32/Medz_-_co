import React from 'react';

const Blogs = () => {
    return (
        <div className='px-14 my-10'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> How will you improve the performance of a React Application?</h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> What are the different ways to manage a state in a React application?</h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> How does prototypical inheritance work?</h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-2xl font-semibold'><span className='text-3xl font-bold'>Q:</span> What is a unit test? Why should write unit tests?</h2>
                <p className='text-md font-bold mt-1'>Answer:</p>
            </div>

        </div>
    );
};

export default Blogs;