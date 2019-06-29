const initialState = {
    username: ''
}

const SET_USERNAME = 'SET_USERNAME' 

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                username: action.payload
            }
        default:
            return state
    }
}

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export default reducer