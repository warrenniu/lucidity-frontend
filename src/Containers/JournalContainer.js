import React from 'react'
import JournalComponent from '../Containers/JournalContainer'
import CreateJournalComponent from '../Components/CreateJournalComponent'
import {connect} from 'react-redux'
// import {getJournals} from '../Redux/actions'
import {getUser} from '../Redux/actions'


class JournalContainer extends React.Component {

    componentDidMount() {
        // this.props.getJournals()
        if (!this.props.user) {
        this.props.getUser()
        }
    }

    arrayOfJournals = () => {
        const sortedUserJournalArray = this.props.user.journals.sort((a,b) => parseFloat(a.year) - parseFloat(b.year))
        console.log(sortedUserJournalArray)
        return sortedUserJournalArray.map(journalEl => <JournalComponent key={journalEl.id} journalObj={journalEl} />)
    }
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h3>Journal Container</h3>
                <CreateJournalComponent />
                {/* {this.props.user ? this.arrayOfJournals() : null}  */}
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
        getUser: () => dispatch(getUser())
    }
}

export default connect(msp, mdp)(JournalContainer)