import {combineReducers} from 'redux'

const defaultState = {
    user: null,
    journals: []
}

function journalsReducer(prevState = defaultState.journals, action) {
    switch (action.type) {
        case "GET_JOURNALS" :
            return action.payload
        case "POST_JOURNALS" :
            return [...prevState, action.payload]
        case "POST_DREAM" :
            const addDreamToJournal = prevState.find(journal => journal.id === action.payload.journal_id)
            addDreamToJournal.dreams = [...addDreamToJournal.dreams, action.payload]
            return [...prevState]
        case "DELETE_DREAM" :
            const deleteDreamFromJournal = prevState.find(journal => journal.id === action.payload.journal_id)
            deleteDreamFromJournal.dreams = [...deleteDreamFromJournal.dreams.filter(dream => dream.id !== action.payload.id)]
            return [...prevState]
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
        case "POST_LOGIN" :
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