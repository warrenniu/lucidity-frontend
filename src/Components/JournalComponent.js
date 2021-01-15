import React from 'react'
import CreateDreamComponent from './CreateDreamComponent'
import DreamContainer from '../Containers/DreamContainer'
import DeleteJournalComponent from '../Components/DeleteJournalComponent'
import { connect } from 'react-redux'

class JournalComponent extends React.Component {

    render() {
        console.log(this.props.journalObj)
        return (
            <div>
                <h3>Journal Component</h3>
                <h3>Year: {this.props.journalObj.year}</h3>
                <h3>Month: {this.props.journalObj.month}</h3>
                <DeleteJournalComponent currentJournal={this.props.journalObj} />
                <CreateDreamComponent journalId={this.props.journalObj.id} />
                <DreamContainer journalId={this.props.journalObj.id} />
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


export default connect(msp, null)(JournalComponent)