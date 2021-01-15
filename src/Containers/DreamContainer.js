import React from 'react'
import { getDreams } from '../Redux/actions'
import DreamComponent from '../Components/DreamComponent'
import { connect } from 'react-redux'

class DreamContainer extends React.Component {

    componentDidMount() {
        this.props.getDreams()
    }

    arrayOfDreams = () => {
        let dreamArray = this.props.dreams.filter(dream => dream.journal_id === this.props.journalId)
        dreamArray = dreamArray.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        return dreamArray.map(dreamEl => <DreamComponent key={dreamEl.id} dreamObj={dreamEl} />)
    }

    render() {
        // console.log("In Dream Container", this.props.dreams)
        return (
            <div>
                {this.arrayOfDreams()}
            </div>
        )
    }
}
function msp(state) {
    return {
        user: state.user,
        journals: state.journals,
        dreams: state.dreams
    }
}

function mdp(dispatch) {
    return {
        getDreams: () => dispatch(getDreams())
    }
}

export default connect(msp, mdp)(DreamContainer)
