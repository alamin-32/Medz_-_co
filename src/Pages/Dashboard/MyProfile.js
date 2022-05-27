// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const MyProfile = () => {
//     const [user] = useAuthState()
//     const { register, handleSubmit } = useForm();

//     const onSubmit = data => {
//         const email = user?.email;
//         if (email) {
//             fetch(`https://medz-app.herokuapp.com/users/${email}`, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     alert.success('Success')
//                 })
//         }

//     };

//     return (
//         <div>
//             <h1 className='text-center text-3xl font-bold mt-5'>Update Your Profile</h1>
//             <form className='flex flex-col px-5  lg:w-3/6 mx-auto mt-6'
//                 onSubmit={handleSubmit(onSubmit)}>
//                 <input className=' font-bold text-white mb-1 p-3 rounded  bg-slate-500' name='img'
//                     autoComplete='off'
//                     placeholder='Photo Url'
//                     type="text" {...register("img")} />

//                 <input className=' font-bold mb-1 p-3 rounded bg-slate-500'
//                     name='name'
//                     autoComplete='off'
//                     placeholder='Product Name'
//                     {...register("name")} />

//                 <textarea className='font-bold mb-1 p-3 rounded bg-slate-500'
//                     name='description'
//                     autoComplete='off'
//                     placeholder='Description'
//                     {...register("description")} />

//                 <input className='font-bold mb-1 p-3 rounded bg-slate-500'
//                     name='price'
//                     placeholder='Price'
//                     type="number" {...register("price")} />

//                 <input className='font-bold mb-1 p-3 rounded bg-slate-500'
//                     name='order'
//                     placeholder='Min Order'
//                     type="number" {...register("order")} />

//                 <input className='font-bold mb-1 p-3 rounded bg-slate-500'
//                     name='available'
//                     placeholder='Quantity'
//                     type="number" {...register("available")} />

//                 <input className='mb-2 w-50 mx-auto bg-cyan-400 mt-2 px-4 py-2 rounded text-large font-semibold text-white add-product'
//                     type="submit"
//                     value="Add products" />
//             </form>
//         </div>
//     );
// };

// export default MyProfile;