import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import postCourseData from '../../redux/thunks/postCourseData';

const AddCourse = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const date = new Date()
        const course = {
            title: data.title,
            author: data.author,
            image: data.image,
            rating: data.rating,
            price: data.price,
            topics: [
                data.topic1,
                data.topic2,
                data.topic3,
            ],
            lastUpdate: date.toISOString().split('T')[0],
        };

    console.log(course, "course data");
    dispatch(postCourseData(course));
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Course Title
          </label>
          <input type='text' id='model' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='author'>
            Author Name
          </label>
          <input type='text' name='author' id='author' {...register("author")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Price
          </label>
          <input type='number' name='price' id='price' {...register("price")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='rating'>
            Rating
          </label>
          <input
            type='number'
            name='rating'
            id='rating'
            {...register("rating")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='topic1'>
            Add Topic 1
          </label>
          <input
            type='text'
            name='topic1'
            id='topic1'
            {...register("topic1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='topic2'>
            Add Topic 2
          </label>
          <input
            type='text'
            name='topic2'
            id='topic2'
            {...register("topic2")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='topic3'>
            Add Topic 3
          </label>
          <input
            type='text'
            name='topic3'
            id='topic3'
            {...register("topic3")}
          />
        </div>
        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;