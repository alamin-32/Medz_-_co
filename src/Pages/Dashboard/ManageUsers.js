import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://medz-app.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5'>Users: <span className='text-cyan-700'>{users.length}</span></h1>
            <div className="overflow-x-auto mx-5">
                <table className="table w-full my-10 ">
                    <thead className='bg-cyan-400'>
                        <tr>
                            <th className='bg-cyan-400'></th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'>Name</th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'>User Id</th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th className='font-semibold text-center bg-cyan-100 '>{index + 1}</th>
                                    <td className='font-semibold text-center bg-cyan-100 '>{user.email}</td>
                                    <td className='font-semibold text-center bg-cyan-100 '>{user._id}</td>
                                    <td className='font-semibold text-center bg-cyan-100 '><button className='bg-cyan-700 px-5 py-2 rounded text-white font-bold'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;