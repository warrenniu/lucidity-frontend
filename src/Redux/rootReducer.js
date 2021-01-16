import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    journals: [],
    dreams: []
}

function journalsReducer(prevState = defaultState.journals, action) {
    switch (action.type) {
        case "GET_JOURNALS":
            return action.payload
        case "POST_JOURNAL":
            return [...prevState, action.payload]
        case "DELETE_JOURNAL" :
            return prevState.filter(journalEl => journalEl.id !== action.payload.id)
        default:
            return prevState
    }
}

function userReducer(prevState = defaultState.user, action) {
    switch (action.type) {
        case "GET_USER":
            return action.payload
        case "POST_USER":
            return prevState
        case "POST_LOGIN":
            return prevState
        default:
            return prevState
    }
}

function dreamsReducer(prevState = defaultState.dreams, action) {
    switch (action.type) {
        case "GET_DREAMS":
            return action.payload
        case "POST_DREAM":
            //     const addDreamToJournal = prevState.find(journal => journal.id === action.payload.journal_id)
            //     addDreamToJournal.dreams = [...addDreamToJournal.dreams, action.payload]
            //     return [...prevState]
            return [...prevState, action.payload]
        case "PATCH_DREAM":
            let newDreamArray = [...prevState]
            let index = newDreamArray.findIndex(dream => dream.id === action.payload.id)
            newDreamArray[index] = action.payload
            return newDreamArray
        case "DELETE_DREAM":
            return prevState.filter(dream => dream.id !== action.payload.id)

        default:
            return prevState
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    journals: journalsReducer,
    dreams: dreamsReducer
})

export default rootReducer