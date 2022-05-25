import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://medz-app.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5'>My Products: <span className='text-cyan-700'>{orders.length}</span></h1>
            <div class="overflow-x-auto mx-5">
                <table class="table w-full my-10 ">
                    <thead className='bg-cyan-400'>
                        <tr>
                            <th className='bg-cyan-400'></th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'>Name</th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'>Product</th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th className='font-semibold text-center bg-cyan-100 '>{index + 1}</th>
                                <td className='font-semibold text-center bg-cyan-100 '>{order.email}</td>
                                <td className='font-semibold text-center bg-cyan-100 '>{order._id}</td>
                                <td className='font-bold text-center bg-cyan-100 '>{order.quantity}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;