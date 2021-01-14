import {combineReducers} from 'redux'

const defaultState = {
    user: null,
    journals: []
}

function journalsReducer(prevState = defaultState.journals, action) {
    switch (action.type) {
        case "GET_JOURNALS" :
            return action.payload
        default :
            return prevState
    }
}

function userReducer(prevState = defaultState.user, action) {
    switch (action.type) {
        case "GET_USER" :
            return action.payload
        case "POST_USER" :
            return prevState
        default :
            return prevState
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    journals: journalsReducer
})

export default rootReducer