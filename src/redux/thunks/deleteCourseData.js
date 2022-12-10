import { toast } from "react-toastify";
import { removeCourse } from "../actions/courseActions";

const deleteCourseData = (courseId) => async dispatch => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    const response =  await fetch(`https://tutorials-zone-server.vercel.app/course/${courseId}`, requestOptions);
    const data = await response.json();
    if(data.acknowledged) {
        dispatch(removeCourse(courseId));
        toast.success('course deleted successfully!');
    }
}
       
export default deleteCourseData;
