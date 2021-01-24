import React from 'react'
import { getDreams } from '../Redux/actions'
import DreamComponent from '../Components/DreamComponent'
import { connect } from 'react-redux'

class DreamContainer extends React.Component {

    state = {
        searchTerm: "",
        journalObj: null,
        id: null
    }

    componentDidMount() {
        this.props.getDreams()
        // this.findJournalObj()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.id !== this.props.match.params.id) {
    //         this.findJournalObj()
    //     }
    // }

    searchChangeHandler = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    arrayOfDreams = () => {
        let dreamArray = this.props.dreams.filter(dream => dream.journal_id === this.props.journalId)
        dreamArray = dreamArray.filter(dreamEl => dreamEl.title.toLowerCase().includes(this.props.value.toLowerCase()))
        dreamArray = dreamArray.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        return dreamArray.map(dreamEl => <DreamComponent key={dreamEl.id} dreamObj={dreamEl} />)
    }

    // findJournalObj = () => {
    //     const id = parseInt(this.props.match.params.id) 
    //     this.setState({id: id})
    //     const foundJournalObj = this.props.journals.find(journalEl => journalEl.id ===id)
    //     console.log(this.props.journals)
    //     this.setState({journalObj: foundJournalObj})
    //     console.log("id", id)
    //     console.log("found journal", foundJournalObj)
    // }




    render() {
        // console.log(this.props.match.params.id)
        return (
            <div>
            <div className="dreamCard">
                {this.arrayOfDreams()}
                {/* {this.state.journalObj ? console.log("object in state", this.state.journalObj) : console.log("object not in state")}
                {this.state.journalObj ? <h3>{this.state.journalObj.year}</h3> : null} */}
            </div>
            </div>
        )
    }
}
function msp(state) {
    return {
        user: state.user,
        journals: state.journals,
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
