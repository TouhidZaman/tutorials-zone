import { GET_CONTENT } from "../actionTypes"

export const loadCourses = (courses) => {
    return {
        type: GET_CONTENT,
        payload: courses
    }
}
