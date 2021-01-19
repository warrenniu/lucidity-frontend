import React from 'react'
import CreateDreamModal from './CreateDreamModal'
import CreateDreamComponent from './CreateDreamComponent'
import DreamContainer from '../Containers/DreamContainer'
import EditJournalComponent from '../Components/EditJournalComponent'
import DeleteJournalComponent from '../Components/DeleteJournalComponent'
import { connect } from 'react-redux'

class JournalComponent extends React.Component {

    render() {
        return (
            <div>
                <h3>Journal Component</h3>
                <h3>Year: {this.props.journalObj.year}</h3>
                <h3>Month: {this.props.journalObj.month}</h3>
                <EditJournalComponent currentJournal={this.props.journalObj} />
                <DeleteJournalComponent currentJournal={this.props.journalObj} />
                <CreateDreamModal journalId={this.props.journalObj.id} />
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