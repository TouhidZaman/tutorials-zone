import { ADD_CONTENT, ADD_HISTORY, DELETE_CONTENT, GET_CONTENT } from "../actionTypes";

const initialState  = {
    courses: [],
    courseHistories: [],
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTENT: 
            return {
                ...state,
                courses: action.payload
            }

        case ADD_CONTENT: 
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }

        case DELETE_CONTENT: 
            const newCourses = [...state.courses];
            const courseIndex = state.courses.map(ch => ch._id).indexOf(action.payload);
            if(courseIndex !== -1) {
                newCourses.splice(courseIndex, 1)
                return {
                    ...state,
                    courses: newCourses
                }
            }
            return state;

        case ADD_HISTORY: 
            const historyIndex = state.courseHistories.map(ch => ch._id).indexOf(action.payload._id);
            const newCourseHistories = [...state.courseHistories];
            if(historyIndex === -1) {
                newCourseHistories.unshift(action.payload);
                return {
                    ...state,
                    courseHistories: newCourseHistories
                }
            }
            newCourseHistories.splice(historyIndex, 1);
            newCourseHistories.unshift(action.payload)
            return {
                ...state,
                courseHistories: newCourseHistories
            }

        default:
            return state;
    }
}

export default courseReducer;