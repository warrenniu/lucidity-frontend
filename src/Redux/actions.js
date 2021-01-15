import { GET_JOURNALS, POST_JOURNAL, DELETE_JOURNAL, GET_USER, POST_USER, POST_LOGIN, POST_DREAM, GET_DREAMS, DELETE_DREAM } from './actionTypes'

const BASE_URL = "http://localhost:4000"

export function getJournals() {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(arrayOfJournals => {
                dispatch({ type: GET_JOURNALS, payload: arrayOfJournals })
            })
    }
}

export function postJournal(newJournalObj) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJournalObj),
        })
            .then(response => response.json())
            .then(journalObj => {
                dispatch({ type: POST_JOURNAL, payload: journalObj })
            })
    }
}

export function deleteJournal(journalObj) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals/${journalObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: DELETE_JOURNAL, payload: journalObj })
            })

    }
}

export function getUser() {
    console.log("before fetch")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/users/1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(userObj => {
                dispatch({ type: GET_USER, payload: userObj })
                console.log("After Fetch")
            })
    }
}

export function postUser(newUser) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/users`, {
            method: 'POST',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: newUser }),
        })
            .then(response => response.json())
            .then(user => {
                dispatch({ type: POST_USER, payload: user })
            })
    }
}

export function postLogin(userInfo) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/login`, {
            method: 'POST',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userInfo }),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: POST_LOGIN, payload: data })
            })
    }
}

export function getDreams() {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(arrayOfDreams => {
                dispatch({ type: GET_DREAMS, payload: arrayOfDreams })
            })
    }
}

export function postDream(newDreamObj) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDreamObj),
        })
            .then(response => response.json())
            .then(dreamObj => {
                dispatch({ type: POST_DREAM, payload: dreamObj })
            })
    }
}

export function deleteDream(dreamObj) {
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams/${dreamObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: DELETE_DREAM, payload: dreamObj })
            })

    }
}