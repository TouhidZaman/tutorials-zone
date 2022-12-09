import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className='h-14 bg-blue-500 w-full mx-auto px-2 md:px-16'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white'>
                <h1 className='text-xl'>Tutorials Zone</h1>
                <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
                    <input
                        className='h-8 rounded-full w-full text-sm border-0 pl-4 focus:ring-0 outline-none'
                        type='text'
                        name='search'
                        placeholder='Type course name here to search'
                        id='search'
                    />
                    <button>
                        <BiSearchAlt />
                    </button>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;