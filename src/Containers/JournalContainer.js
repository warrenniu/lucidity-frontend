import React from 'react'
import JournalComponent from '../Components/JournalComponent'
import CreateJournalComponent from '../Components/CreateJournalComponent'
import { connect } from 'react-redux'
import { getUser } from '../Redux/actions'
import { getJournals } from '../Redux/actions'
import '../App.css';

class JournalContainer extends React.Component {

    componentDidMount() {
        this.props.getJournals()
        this.props.getUser()
    }
    arrayOfJournals = () => {
        let journalArray = this.props.journals
        journalArray = journalArray.filter(journal => journal.user_id === this.props.user.id)
        journalArray = journalArray.sort((a, b) => parseFloat(b.year) - parseFloat(a.year))
        return journalArray.map(journalEl => <JournalComponent key={journalEl.id} journalObj={journalEl} />)
    }


    render() {
        return (
            <div>
                <h3>Journal Container</h3>
                <div>
                <CreateJournalComponent />
                </div>
                <div>
                {this.props.user ? this.arrayOfJournals() : null }
                </div>
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
        getUser: () => dispatch(getUser())
    }
}

export default connect(msp, mdp)(JournalContainer)