import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {postJournal} from '../Redux/actions'
import Button from '@material-ui/core/Button'

class CreateJournalComponent extends React.Component {

	state = {
		year: "",
		month: "",
        user_id: 1
        //this.props.user.id is returning null on first render. async issue?
	}
	
	inputChangeHandler = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	formSubmitHandler = (event) => {
		event.preventDefault()
		this.props.postJournal(this.state)
		this.setState({year: "", month: ""})
		this.props.history.push("/journals")
	}

	render() {
        console.log(this.props.user)
		return (
			<div style={{
				'border': '2px solid white',
				'borderRadius': '3%',
				'boxShadow': `5px 5px 5px 2px lightgrey`,
				'width': '250px',
				'margin': '15px',
				'padding': '15px',
				'textAlign': 'center',
				'marginLeft': 'auto',
				'marginRight': 'auto'
				}}>
				<h3 style={{'color': '#000'}}>Create Journal</h3>
				<form onSubmit={this.formSubmitHandler}>
					<input className='inputOverride' style={{'marginBottom': '10px'}} type="integer" placeholder="year" name="year" value={this.state.year} onChange={this.inputChangeHandler} /><br />
					<input className='inputOverride' style={{'marginBottom': '10px'}} type="text" placeholder="month" name="month" value={this.state.month} onChange={this.inputChangeHandler} /><br />
					<Button variant="contained" color="secondary" type="submit">
						Create Journal
					</Button>
				</form>
			</div>
		)
	}
}

function msp(state) {
	return {
		user: state.user
	}
}

function mdp(dispatch) {
	return {
		postJournal: newJournalObj => dispatch(postJournal(newJournalObj))
	}
}

export default connect(msp, mdp)(withRouter(CreateJournalComponent))