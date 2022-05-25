import { Result } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';



const ProductDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState({})

    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://medz-app.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id, products])




    const handlePurchase = (e) => {
        e.preventDefault();
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const quantity = e.target.quantity.value;

        const order = {
            name: user.displayName,
            email: user.email,
            address: address,
            number: phone,
            quantity: quantity
        }
        console.log(order);

        fetch('https://medz-app.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Ordered Successful")
                e.target.reset()
            })


        const updateQuantity = parseInt(products.available) - (quantity);


        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ updateQuantity }),
        })
            .then((res) => res.json())
            .then((result) => {
                setProducts(result)

            });

    }




    return (
        <div className=" mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-20">

            <div className='flex justify-center items-center'>
                <div class="card card-compact w-3/6 bg-cyan-200">
                    <figure><img src={products.img} alt="gloves" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-xl font-bold">{products.name}</h2>
                        <p>Description: {products.description}</p>
                        <h2 className='text-md font-bold'>Available: {products.available}</h2>
                        <h2 className='text-md font-bold'>Min Order: {products.order}</h2>
                        <h1 className='text-xl font-bold'>Price: {products.price} Tk</h1>

                    </div>
                </div>
            </div>



            <div className='mr-10'>
                <div className="mx-10 mt-5">
                    <h2 className="text-3xl font-bold text-cyan-400 text-start ml-14">Order Details</h2>
                    <div className="">
                        <form onSubmit={handlePurchase}>
                            <div class="form-control font-bold w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    class="input input-bordered font-semibold w-full max-w-xs"
                                    value={user?.displayName}
                                    disabled
                                />
                            </div>
                            <div class="form-control font-bold w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="input input-bordered font-semibold w-full max-w-xs"
                                    value={user?.email}
                                    disabled
                                />
                            </div>
                            <div class="form-control w-full font-bold max-w-xs">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    class="input input-bordered w-full max-w-xs"
                                    name="address"
                                    required
                                />
                            </div>
                            <div class="form-control w-full font-bold max-w-xs">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    class="input input-bordered w-full max-w-xs"
                                    name="phone"
                                    required
                                />
                            </div>
                            <div class="form-control w-full font-bold max-w-xs">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    class="input input-bordered w-full max-w-xs"
                                    name="quantity"
                                    required
                                />

                            </div>

                            <input className='btn w-full btn-outline max-w-xs text-white font-bold bg-cyan-400 mt-5' value='Purchase' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductDetails;