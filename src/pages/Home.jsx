import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard';
import { sortByUpload } from '../redux/actions/filterActions';
import fetchCourses from '../redux/thunks/fetchCourses';

const Home = () => {
    const courses = useSelector(state => state.courseReducer.courses);
    const { sortBy, filters: { topicTags } } = useSelector(state => state.filterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    //Topic filtering
    let content = [];
    if(topicTags.length && courses.length) {
        content = courses.filter(course => course.topics.some(topic => topicTags.includes(topic)));
    } else {
        content = courses;
    }

    //Sorting based on lastUpdate
    if(sortBy && content.length) {
        content = content.sort((a, b) =>  {
            const firstDate = new Date(a.lastUpdate);
            const secondDate = new Date(b.lastUpdate);
            if(sortBy==="descending") return secondDate - firstDate;
            return firstDate - secondDate;
        });
    } 



    const activeClass = "text-white  bg-blue-500 border-white";

    return (
        <div className="max-w-7xl gap-14 md:mx-16 my-10">
            <div className='mb-10 flex justify-between'>
                <h1 className='text-2xl text-blue-500 font-semibold'>All Courses</h1>
                <div className='flex justify-end gap-2'>
                    <span className='px-3 py-2 font-semibold'>Sort By:</span> 
                    <button 
                        className={`border px-3 py-2 rounded-full font-semibold ${sortBy === "ascending" ? activeClass : ""}`}
                        onClick={() => dispatch((sortByUpload("ascending")))}
                    >
                        First upload
                    </button>
                    <button 
                        className={`border px-3 py-2 rounded-full font-semibold ${sortBy === "descending" ? activeClass : ""}`}
                        onClick={() => dispatch((sortByUpload("descending")))}
                    >
                        Last upload
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10'>
                {content.map(course => <CourseCard
                    course={course} 
                    key={course._id} 
                />)}
            </div>
        </div>
    );
};

export default Home;