import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from '../../redux/thunks/fetchCourses';

const AllCourses = () => {
    const courses = useSelector(state => state.courseReducer.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    return (
        <div class='pt-3 w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-sm border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>All Courses</div>
                </header>
                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Course Title</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Author</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Rating</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Price</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                        {courses.map(({ rating, author, title, price, _id }) => (
                            <tr key={_id}>
                                <td class='p-2'>
                                    <div class='font-medium text-gray-800'>{title}</div>
                                </td>
                                <td class='p-2'>
                                    <div class='text-left capitalize'>{author}</div>
                                </td>
                                <td class='p-2'>
                                    <div class='text-left'>{rating}</div>
                                </td>
                                <td class='p-2'>
                                    <div class='text-left font-medium text-indigo-500'>{price} BDT</div>
                                </td>
                                <td class='p-2'>
                                    <div class='flex justify-center'>
                                    <button>
                                        <svg
                                        class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                        ></path>
                                        </svg>
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;