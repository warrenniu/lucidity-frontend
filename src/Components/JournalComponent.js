import React from 'react'
import CreateDreamModal from './CreateDreamModal'
import DreamContainer from '../Containers/DreamContainer'
import EditJournalModal from './EditJournalModal'
import DeleteJournalComponent from '../Components/DeleteJournalComponent'
import { connect } from 'react-redux'

class JournalComponent extends React.Component {

    render() {
        return (
            <div style={{
                'width': '100%'
            }}>
                {/* <h3>Journal Component</h3> */}
                <h3>{this.props.journalObj.title}</h3>
                <br></br>
                <DreamContainer journalId={this.props.journalObj.id} />
                <CreateDreamModal journalId={this.props.journalObj.id} />
                <br></br>
                <br></br>
                <EditJournalModal currentJournal={this.props.journalObj} />
                <br></br>
                <DeleteJournalComponent currentJournal={this.props.journalObj} />
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