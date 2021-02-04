import React from 'react'
import { getDreams } from '../Redux/actions'
import DreamComponent from '../Components/DreamComponent'
import SortComponent from '../Components/SortComponent'
import { connect } from 'react-redux'

class DreamContainer extends React.Component {

    state = {
        searchTerm: "",
    }

    componentDidMount() {
        this.props.getDreams()
    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    arrayOfDreams = () => {
        let dreamArray = this.props.dreams.filter(dream => dream.journal_id === this.props.journalId)
        dreamArray = dreamArray.filter(dreamEl => dreamEl.title.toLowerCase().includes(this.props.value.toLowerCase()))
        dreamArray = dreamArray.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        return dreamArray.map(dreamEl => <DreamComponent key={dreamEl.id} dreamObj={dreamEl} />)
    }

    render() {
        return (
            <div>
                <SortComponent />
                <div className="dreamCard">
                    {this.arrayOfDreams()}
                </div>
            </div>
        )
    }
}
function msp(state) {
    return {
        dreams: state.dreams,
        value: state.value
    }
}

function mdp(dispatch) {
    return {
        getDreams: () => dispatch(getDreams())
    }
}

export default connect(msp, mdp)(DreamContainer)
