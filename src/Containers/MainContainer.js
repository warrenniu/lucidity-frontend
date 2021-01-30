import React from 'react'
import JournalContainer from './JournalContainer'
import { connect } from 'react-redux'

class MainContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.user !== null ? <JournalContainer /> : null}
            </div>
        )

    }
}

function msp(state) {
    return {
        user: state.user,

    }
}

export default connect(msp)(MainContainer)