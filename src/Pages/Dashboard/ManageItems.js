import React from 'react';
import { useForm } from 'react-hook-form';
import DeleteProduct from './DeleteProduct';

const ManageItems = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        fetch('https://medz-app.herokuapp.com/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('product added')
            })
    };


    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold mt-5'>Add Product</h1>
            <form className='flex flex-col px-5  lg:w-3/6 mx-auto mt-6'
                onSubmit={handleSubmit(onSubmit)}>
                <input className=' font-bold text-white mb-1 p-3 rounded  bg-slate-500' name='img'
                    placeholder='Photo Url'
                    type="text" {...register("img")} />

                <input className=' font-bold mb-1 p-3 rounded bg-slate-500'
                    name='name'
                    placeholder='Product Name'
                    {...register("name")} />

                <textarea className='font-bold mb-1 p-3 rounded bg-slate-500'
                    name='description'
                    placeholder='Description'
                    {...register("description")} />

                <input className='font-bold mb-1 p-3 rounded bg-slate-500'
                    name='price'
                    placeholder='Price'
                    type="number" {...register("price")} />

                <input className='font-bold mb-1 p-3 rounded bg-slate-500'
                    name='order'
                    placeholder='Min Order'
                    type="number" {...register("order")} />

                <input className='font-bold mb-1 p-3 rounded bg-slate-500'
                    name='available'
                    placeholder='Quantity'
                    type="number" {...register("available")} />

                <input className='mb-2 w-50 mx-auto bg-cyan-400 mt-2 px-4 py-2 rounded text-large font-semibold text-white add-product'
                    type="submit"
                    value="Add products" />
            </form>
            <DeleteProduct></DeleteProduct>
        </div>
    );
};

export default ManageItems;