import React from 'react';
import useAdmin from '../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AllUsers = ({ adminUser, index }) => {
    const [user] = useAuthState(auth);
    // const { email, _id } = user
    const { admin } = useAdmin(user)
    console.log(admin);


    const makeAdmin = () => {
        fetch(`https://medz-app.herokuapp.com/users/admin/:${user.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        })

    }
    return (
        <tr>
            <th className='font-semibold text-center bg-cyan-100 '>{index + 1}</th>
            <td className='font-semibold text-start bg-cyan-100 '>{adminUser.email}</td>
            <td className='font-semibold text-start bg-cyan-100 '>{adminUser._id}</td>
            <td className='font-semibold text-center bg-cyan-100 '>
                <button
                    onClick={makeAdmin}
                    className='bg-cyan-700 px-5 py-2 rounded text-white font-bold'
                >Make Admin
                </button>
            </td>
        </tr>

    );
};

export default AllUsers;