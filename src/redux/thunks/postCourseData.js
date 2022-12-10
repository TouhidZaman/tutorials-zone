import { toast } from "react-toastify";
import { addNewCourse, loadCourses } from "../actions/courseActions";

const postCourseData = (course) => async dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
    };

    const response =  await fetch('https://tutorials-zone-server.vercel.app/course', requestOptions);
    const data = await response.json();
    if(data.acknowledged) {
        dispatch(addNewCourse({_id: data.insertedId, ...course}));
        toast.success('New course added successfully!');
    }
}
       
export default postCourseData;
