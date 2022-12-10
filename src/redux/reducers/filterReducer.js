import { SORT_BY_UPLOAD, TOGGLE_TOPIC_TAGS } from "../actionTypes";

const initialState  = {
    filters: {
        topicTags: []
    },
    sortBy: ""
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SORT_BY_UPLOAD: 
            return {
                ...state,
                sortBy: action.payload
            }

        case TOGGLE_TOPIC_TAGS: 
            const topicIndex = state.filters.topicTags.indexOf(action.payload)
            const newTopicTags = [...state.filters.topicTags]
            if(topicIndex === -1) {
                newTopicTags.push(action.payload)
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        topicTags: newTopicTags
                    }
                }
            }
            newTopicTags.splice(topicIndex, 1)
            return {
                ...state,
                filters: {
                    ...state.filters,
                    topicTags: newTopicTags
                }
            }

        default:
            return state;
    }
}

export default filterReducer;