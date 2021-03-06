import { GET_USER, GET_JOURNALS, GET_DREAMS, POST_USER, POST_LOGIN, POST_JOURNAL, POST_DREAM, PATCH_JOURNAL, PATCH_DREAM, DELETE_JOURNAL, DELETE_DREAM,  REMOVE_USER, SEARCH } from './actionTypes'

const BASE_URL = "http://lucidityapp.herokuapp.com"


/************ GET ACTIONS ***************/
export function getUser(currentUser) {
	return function (dispatch) {
        dispatch({ type: GET_USER, payload: currentUser })
    }
}

export function getJournals() {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(arrayOfJournals => {
                dispatch({ type: GET_JOURNALS, payload: arrayOfJournals })
            })
    }
}

export function getDreams() {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(arrayOfDreams => {
                dispatch({ type: GET_DREAMS, payload: arrayOfDreams })
            })
    }
}

/************ POST ACTIONS ***************/

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
                localStorage.setItem("token", data.jwt)
                dispatch({ type: POST_LOGIN, payload: data })
            })
    }
}

export function postJournal(newJournalObj) {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newJournalObj),
        })
            .then(response => response.json())
            .then(journalObj => {
                dispatch({ type: POST_JOURNAL, payload: journalObj })
            })
    }
}

export function postDream(newDreamObj) {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newDreamObj),
        })
            .then(response => response.json())
            .then(dreamObj => {
                dispatch({ type: POST_DREAM, payload: dreamObj })
            })
    } 
}

/************ PATCH ACTIONS ***************/

export function patchJournal(updatedJournalObj) {
    const token = localStorage.getItem("token")
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/journals/${updatedJournalObj.id}`, {
			method: 'PATCH',
			headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
			},
			body: JSON.stringify(updatedJournalObj),
		})
			.then(response => response.json())
			.then(journalObj => {
				dispatch({ type: PATCH_JOURNAL, payload: journalObj })
			})
	}
}

export function patchDream(updatedDreamObj) {
    const token = localStorage.getItem("token")
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/dreams/${updatedDreamObj.id}`, {
			method: 'PATCH',
			headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
			},
			body: JSON.stringify(updatedDreamObj),
		})
			.then(response => response.json())
			.then(dreamObj => {
				dispatch({ type: PATCH_DREAM, payload: dreamObj })
			})
	}
}

/************ DELETE ACTIONS ***************/

export function deleteDream(dreamObj) {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/dreams/${dreamObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: DELETE_DREAM, payload: dreamObj })
            })

    }
}

export function deleteJournal(journalObj) {
    const token = localStorage.getItem("token")
    return function (dispatch) {
        fetch(`${BASE_URL}/api/v1/journals/${journalObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: DELETE_JOURNAL, payload: journalObj })
            })
    }
}

export function removeUser() {
	return function (dispatch) {
		dispatch({ type: REMOVE_USER })
	}
}

/************ SEARCH ACTION ***************/

export function search(value) {
    return function (dispatch) {
        dispatch({type: SEARCH, payload: value})
    }
}

