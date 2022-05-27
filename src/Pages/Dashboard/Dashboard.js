import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-5xl text-center mt-6 text-cyan-400 font-bold'>Dashboard</h1>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-cyan-200 rounded-md text-base-content">

                    <li className='text-md font-bold'><Link to='/dashboard'>My Orders</Link></li>
                    <li className='text-md font-bold'><Link to='review'>My Review</Link></li>
                    <li className='text-md font-bold'> <Link to='manageItem'>Manage Products</Link></li>
                    <li className='text-md font-bold'> <Link to='manageUsers'>Manage Users</Link></li>
                    {/* <li className='text-md font-bold'> <Link to='myProfile'>My Profile</Link></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;