import { ADD_HISTORY, GET_CONTENT, ADD_CONTENT, DELETE_CONTENT } from "../actionTypes"

export const loadCourses = (courses) => {
    return {
        type: GET_CONTENT,
        payload: courses
    }
}

export const addNewCourse = (course) => {
    return {
        type: ADD_CONTENT,
        payload: course
    }
}

export const removeCourse = (courseId) => {
    return {
        type: DELETE_CONTENT,
        payload: courseId
    }
}

export const addToCourseHistory = (course) => {
    return {
        type: ADD_HISTORY,
        payload: course
    }
}
