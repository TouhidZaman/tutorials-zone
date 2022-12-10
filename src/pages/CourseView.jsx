import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import fetchCourses from '../redux/thunks/fetchCourses';

const CourseView = () => {
    const { courseId } = useParams()
    const courses = useSelector(state => state.courseReducer.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    let course = {}
    if(courses.length) {
        const selectedCourse = courses.find(c => c._id === courseId);
        if(selectedCourse) course = selectedCourse;
    }


    const date = new Date(course.lastUpdate);

    return (
        <div className='grid grid-cols-1 max-w-7xl gap-8 md:mx-16 my-10'>
            <h1 className='text-2xl text-blue-500 font-semibold'>Course Details View Page</h1>
            <div className='shadow-lg rounded-3xl border relative  p-3 flex text-indigo-900'>
                <div className='mr-8'>
                    <img className="rounded-md h-36 w-56 mb-2" src={course.image} alt={"course-image"} />
                    <div className='flex gap-2'>
                        <Link 
                            to={"/"} 
                            className='bg-blue-500 rounded-full py-1 px-2 flex-1 text-white text-bold text-center'
                        >
                            Back to courses
                        </Link>
                        <button
                            title='Add to wishlist'
                            className='bg-blue-500  py-1 px-2 rounded-full'
                        >
                            <BsFillCartFill className='text-white' />
                        </button>
                    </div>
                </div>
                <div>
                    <div className=' flex-1'>
                        <ul className='flex flex-wrap justify-start gap-1'>
                            {course.topics?.map((topic, index) => {
                                return (
                                    <li 
                                        key={index} 
                                        className={`text-sm border px-3 rounded font-semibold border-blue-500`}
                                        >
                                            {topic}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <h1 className='font-bold mb-2'>{course.title}</h1>
                    <p className='font-semibold'>{`Author: ${course.author}`}</p>
                    <p className='font-semibold'>{`Details: ${course.details}`}</p>
                    <p className='font-semibold'>Rating: {course.rating}</p>
                    <p className='font-semibold'>Price: {course.price} BDT</p>
                    <p className='font-semibold mb-3'>Last updated: {date.toLocaleDateString('en-GB')}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseView;