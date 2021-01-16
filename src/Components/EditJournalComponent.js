import React from 'react'
import { connect } from 'react-redux'
import { patchJournal } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class EditJournalComponent extends React.Component {

    state = {
        year: this.props.currentJournal.year,
        month: this.props.currentJournal.month,
        id: this.props.currentJournal.id
    }

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        this.props.patchJournal(this.state)
        this.props.history.push('/journals')
        
    }

    render() {
        return (
            <div>
                <h3>Edit Journal Component</h3>
                <form style={{ 'marginBottom': '15px' }} onSubmit={this.formSubmitHandler}>
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Year" name="year" value={this.state.year} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Month" name="month" value={this.state.month} onChange={this.inputChangeHandler} />
                    <Button variant="contained" color="secondary" type="submit">
                        Edit Journal
					</Button>
                </form>
            </div>
        )
    }
}

function msp(state) {
    return {
        journals: state.journals,
    }
}

function mdp(dispatch) {
    return {
        patchJournal: journalObj => dispatch(patchJournal(journalObj))
    }
}

export default connect(msp, mdp)(withRouter(EditJournalComponent))