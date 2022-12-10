import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-56px)] p-5'>
            <ul className='flex gap-3  flex-col h-full'>
                <li>Author Dashboard</li>
                <li>
                    <Link to='/dashboard'>All Courses</Link>
                </li>
                <li>
                    <Link to='add-course'> Add Course </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;