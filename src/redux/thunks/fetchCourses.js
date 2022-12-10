import { loadCourses } from "../actions/courseActions";

const fetchCourses = () => async dispatch => {
    const response =  await fetch('https://tutorials-zone-server.vercel.app/courses');
    const data = await response.json();
    const courses = data.data;
    if(courses.length) dispatch(loadCourses(courses));
}
       
export default fetchCourses;