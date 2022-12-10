import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard';

const BrowsingHistory = () => {
    const coursesHistories = useSelector(state => state.courseReducer.courseHistories);
    return (
        <div className="max-w-7xl gap-14 md:mx-16 my-10">
            <h1 className='text-2xl text-blue-500 font-semibold'>Browsing Histories</h1>
            {coursesHistories.length? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10'>
                    {coursesHistories.map(course => <CourseCard
                        course={course} 
                        key={course._id} 
                        isInHistory
                    />)}
                </div>
            ): <p className='text-3xl text-center mt-10'> No histories were found</p>}
           
        </div>
    );
};

export default BrowsingHistory;