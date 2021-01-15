import React from 'react' 
import { connect } from 'react-redux' 
import { deleteJournal } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function DeleteJournalComponent(props) {

    const clickHandler = () => {
        props.deleteJournal(props.currentJournal)
        props.history.push('/journals')
    }

    return (
        <div>
            <Button style={{ 'marginRight': '10px' }} variant="contained" color="secondary" onClick={() => clickHandler()}>
                Delete Journal
		    </Button>

        </div>
    )
}

function msp(state) {
    return {
        user: state.user,
        journals: state.journals
    }
}

function mdp(dispatch) {
    return {
        deleteJournal: journalObj => dispatch(deleteJournal(journalObj))
    }
}

export default connect(msp, mdp)(withRouter(DeleteJournalComponent))