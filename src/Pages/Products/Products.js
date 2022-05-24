import { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ home }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('ok')
        fetch('https://medz-app.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className=''>
            <h1 className='text-center py-8 text-5xl text-cyan-400 font-bold'>Our Product Collection</h1>
            <div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1  gap-5  px-5'>
                    {
                        home ?
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