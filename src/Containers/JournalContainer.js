import React from 'react'
import JournalComponent from '../Components/JournalComponent'
import { connect } from 'react-redux'
import { getUser } from '../Redux/actions'
import { getJournals } from '../Redux/actions'
import '../App.css';

class JournalContainer extends React.Component {

    componentDidMount() {
        this.props.getJournals()
        // this.props.getUser()
    }
    arrayOfJournals = () => {
        let journalArray = this.props.journals
        journalArray = journalArray.filter(journal => journal.id === parseInt(this.props.match.params.id))
        // journalArray = journalArray.sort((a, b) => parseFloat(b.year) - parseFloat(a.year))
        return journalArray.map(journalEl => <JournalComponent key={journalEl.id} journalObj={journalEl} />)
    }


    render() {
        return (
            <div style={{
                'width': '100%'
            }}>
                {/* <h3>Journal Container</h3> */} 
                {this.props.user ? this.arrayOfJournals() : null }
                
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
        // getUser: () => dispatch(getUser())
    }
}

export default connect(msp, mdp)(JournalContainer)