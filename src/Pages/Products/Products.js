import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ home }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='bg-gray-100'>
            <h1 className='text-center py-8 text-5xl text-cyan-400 font-bold'>Our Product Collection</h1>
            <div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1  gap-5 ml-5'>
                    {home ?
                        products.slice(6, 10).reverse().map(product => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                        :
                        products.map(product => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;