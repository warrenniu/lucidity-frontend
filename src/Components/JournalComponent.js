import React from 'react'
import CreateDreamComponent from './CreateDreamComponent'
import DreamContainer from '../Containers/DreamContainer'
import { connect } from 'react-redux'

class JournalComponent extends React.Component {

    render() {
        console.log(this.props.journalObj)
        return (
            <div>
                <h3>Journal Component</h3>
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