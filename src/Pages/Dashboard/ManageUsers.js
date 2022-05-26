import React, { useEffect, useState } from 'react';
import AllUsers from './AllUsers';

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
                            <th className='text-sm font-extrabold text-Start bg-cyan-400'>Name</th>
                            <th className='text-sm font-extrabold text-start bg-cyan-400'>User Id</th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'></th>
                            <th className='text-sm font-extrabold text-center bg-cyan-400'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <AllUsers
                                key={user._id}
                                user={user}
                            ></AllUsers>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;