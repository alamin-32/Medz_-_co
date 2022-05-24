import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, img, price, available, order, description } = product;
    const navigate = useNavigate();

    const toProductDetails = id => {
        navigate(`/productDetails/${id}`)
    }

    return (
        <div className=' mt-5 mb-5'>
            <div
                class="card card-compact w-50 bg-cyan-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-xl font-bold">{name}</h2>
                    <p>Description: {description}</p>
                    <h2 className='text-md font-bold'>Available: {available}</h2>
                    <h2 className='text-md font-bold'>Min Order: {order}</h2>
                    <h1 className='text-xl font-bold'>Price: {price} Tk</h1>
                    <div class="card-actions justify-start">
                        <button onClick={() => toProductDetails(_id)} class="btn border-0 font-bold text-white bg-cyan-400">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;