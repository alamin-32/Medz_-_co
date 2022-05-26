import React from 'react';

const AllUsers = ({ user }) => {
    const { email, _id } = user

    const makeAdmin = () => {
        fetch(`https://medz-app.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
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
            <th className='font-semibold text-center bg-cyan-100 '>1</th>
            <td className='font-semibold text-start bg-cyan-100 '>{email}</td>
            <td className='font-semibold text-start bg-cyan-100 '>{_id}</td>
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