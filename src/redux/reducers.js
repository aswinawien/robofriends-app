import * as actionTypes from "./action-types";
import { robots } from "../robots";


const initialState = {
    robots: [],
    loading: false,
    error: '',
    searchField: ''
}


export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: payload
            }
        case actionTypes.FETCH_ROBOTS_ASYNC:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: payload
            }
        case actionTypes.FETCH_ROBOTS_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}