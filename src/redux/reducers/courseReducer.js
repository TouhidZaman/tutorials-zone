import { ADD_HISTORY, GET_CONTENT } from "../actionTypes";

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