import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AuthorLayout = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-12'>
                <Sidebar />
                <div className='col-span-10 w-full bg-gray-100 px-3'>
                    <Outlet />
                </div>
            </div>
        </>
      );
};

export default AuthorLayout;