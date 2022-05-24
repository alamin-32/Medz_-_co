import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = ` https://medz-app.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div className=' mt-5 mb-5'>
            <div
                class="card card-compact w-96">
                <figure><img src={products.img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class=" text-xl font-bold">{products.name}</h2>
                    <p>Description: {products.description}</p>
                    <h2 className='text-md font-bold'>Available: {products.available}</h2>
                    <h2 className='text-md font-bold'>Min Order: {products.order}</h2>
                    <h1 className='text-xl font-bold'>Price: {products.price} Tk</h1>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default ProductDetails;