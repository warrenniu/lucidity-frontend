import React from 'react'
import JournalContainer from './JournalContainer'
import {connect} from 'react-redux'
// import {getJournals} from '../Redux/actions'
// import {getUser} from '../Redux/actions'


class MainContainer extends React.Component {

    // componentDidMount() {
    //     // this.props.getJournals()
    //     if (!this.props.user) {
    //     this.props.getUser()
    //     console.log("in componentDidMount")
    //     }
    // }

    // arrayOfJournals = () => {
    //     const sortedUserJournalArray = this.props.user.journals.sort((a,b) => parseFloat(a.year) - parseFloat(b.year))
    //     console.log(sortedUserJournalArray)
    //     return sortedUserJournalArray.map(journalEl => <JournalComponent key={journalEl.id} journalObj={journalEl} />)
    // }

    arrayOfJournals = () => {
        const sortedUserJournalArray = this.props.user.journals.sort((a,b) => parseFloat(a.year) - parseFloat(b.year))
        console.log(sortedUserJournalArray)
        return sortedUserJournalArray.map(journalEl => <JournalContainer key={journalEl.id} journalObj={journalEl} />)
    }
    render() {
        // console.log(this.props.user)
        return (
            <div>
                <h3>Main Container</h3>
                {this.props.user !== null ? this.arrayOfJournals() : null} 
                {/* {this.arrayOfJournals()} */}
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
        // getJournals: () => dispatch(getJournals()),
        // getUser: () => dispatch(getUser())
    }
}

export default connect(msp, mdp)(MainContainer)