import { ADD_HISTORY, GET_CONTENT } from "../actionTypes"

export const loadCourses = (courses) => {
    return {
        type: GET_CONTENT,
        payload: courses
    }
}

export const addToCourseHistory = (course) => {
    return {
        type: ADD_HISTORY,
        payload: course
    }
}
