import React from 'react'
import JournalComponent from '../Components/JournalComponent'
import { connect } from 'react-redux'
import { getJournals } from '../Redux/actions'
import '../App.css';

class JournalContainer extends React.Component {

    componentDidMount() {
        this.props.getJournals()
    }

    arrayOfJournals = () => {
        let journalArray = this.props.journals
        /* Returning an object - refactor to .find instead of .filter */
        journalArray = journalArray.filter(journal => journal.id === parseInt(this.props.match.params.id))
        return journalArray.map(journalEl => <JournalComponent key={journalEl.id} journalObj={journalEl} />)
    }


    render() {
        return (
            <div style={{ 'width': '100%' }}>
                {this.props.user ? this.arrayOfJournals() : null}
            </div>
        )
    }
}

function msp(state) {
    return {
        user: state.user,
        journals: state.journals
    }
}

function mdp(dispatch) {
    return {
        getJournals: () => dispatch(getJournals()),
    }
}

export default connect(msp, mdp)(JournalContainer)