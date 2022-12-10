import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const CourseCard = ({ course }) => {
    const date = new Date(course.lastUpdate);
    return (
        <div
        className='shadow-lg rounded-3xl border relative  p-3 flex flex-col text-indigo-900'
        key={course._id}
        >
            <div className='h-36 w-full mb-1'>
                <img className="rounded-md" src={course.image} alt={"course-image"} />
            </div>
            <div className=' flex-1'>
                <ul className='flex flex-wrap justify-start gap-1'>
                    {course.topics.map((feature, index) => {
                        return <li key={index} className='cursor-pointer text-sm border px-3 rounded font-semibold text-white  bg-blue-500 border-white'>{feature}</li>;
                    })}
                </ul>
            </div>
            <h1 className='font-bold mb-2'>{course.title}</h1>
            <p className='font-semibold'>{`Author: ${course.author}`}</p>
            <p className='font-semibold'>Rating: {course.rating}</p>
            <p className='font-semibold'>Price: {course.price} BDT</p>
            <p className='font-semibold mb-3'>Last updated: {date.toLocaleDateString('en-GB')}</p>

            <div className='flex gap-2'>
                <button 
                    className='bg-blue-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                >
                    View Details
                </button>
                <button
                    title='Add to wishlist'
                    className='bg-blue-500  py-1 px-2 rounded-full'
                >
                    <BsFillCartFill className='text-white' />
                </button>
            </div>

        </div>
    );
};

export default CourseCard;