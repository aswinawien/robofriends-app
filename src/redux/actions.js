import * as actionTypes from "./action-types";

export const searchFields = (text) => ({
    type: actionTypes.CHANGE_SEARCH_FIELD,
    payload: text
})


export const fetchRobotsAsync = (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ROBOTS_ASYNC });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => { dispatch({ type: actionTypes.FETCH_ROBOTS_SUCCESS, payload: users }) })
        .catch(error => {
            dispatch({ type: actionTypes.FETCH_ROBOTS_FAILURE, payload: error })
        })
}