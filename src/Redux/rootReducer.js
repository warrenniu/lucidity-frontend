import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    journals: [],
    dreams: [],
    value: ""
}

function journalsReducer(prevState = defaultState.journals, action) {
    switch (action.type) {
        case "GET_JOURNALS":
            return action.payload
        case "POST_JOURNAL":
            return [...prevState, action.payload]
        case "PATCH_JOURNAL":
            let newJournalArray = [...prevState]
            let index = newJournalArray.findIndex(journal => journal.id === action.payload.id)
            newJournalArray[index] = action.payload
            return newJournalArray
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
        // case "SEARCH":
        //     let filteredDreamArray = [...prevState]
        //     return filteredDreamArray.filter(dream => dream.title.toLowerCase().includes(action.payload.toLowerCase()))
        default:
            return prevState
    }
}

function valueReducer(prevState = defaultState.value, action) {
    switch(action.type) {
        case "SEARCH": 
        //   const {value} = action;
        //   const dreams = prevState.contents.filter((val) => val.includes(value));
          return action.payload
    
        default:
          return prevState;
      }
    }

const rootReducer = combineReducers({
    user: userReducer,
    journals: journalsReducer,
    dreams: dreamsReducer,
    value: valueReducer
})

export default rootReducer