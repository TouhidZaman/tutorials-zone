import { GET_CONTENT } from "../actionTypes";

const initialState  = {
    courses: []
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTENT: 
            return {
                ...state,
                courses: action.payload
            }
            
        default:
            return state;
    }
}

export default courseReducer;