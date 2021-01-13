import {GET_JOURNALS, GET_USER} from './actionTypes'

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

export function getUser() {
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
			})
	}
}