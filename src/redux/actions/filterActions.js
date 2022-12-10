import { SORT_BY_UPLOAD, TOGGLE_TOPIC_TAGS } from "../actionTypes"

export const sortByUpload = (order) => {
    return {
        type: SORT_BY_UPLOAD,
        payload: order
    }
}

export const toggleTopicTags = (tag) => {
    return {
        type: TOGGLE_TOPIC_TAGS,
        payload: tag
    }
}