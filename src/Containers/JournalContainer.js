import React from 'react'  
import JournalComponent from '../Components/JournalComponent'
import CreateJournalComponent from '../Components/CreateJournalComponent'
import {connect} from 'react-redux'
import {getUser} from '../Redux/actions'

class JournalContainer extends React.Component {

    componentDidMount() {
        // this.props.getJournals()
        if (!this.props.user) {
        this.props.getUser()
        console.log("in componentDidMount")
        }
    }



    render() {
        console.log(this.props.user)
        return (
            <div>
                <h3>Journal Container</h3>
                {this.props.user !== null ? this.arrayOfJournals() : null} 
                {/* {this.arrayOfJournals()} */}
            </div>
        )

    }
}

function msp(state) {
    return {
        user: state.user,
        // journals: state.journals
    }
}

function mdp(dispatch) {
    return {
        // getJournals: () => dispatch(getJournals()),
        getUser: () => dispatch(getUser())
    }
}

export default connect(msp, mdp)(JournalContainer)