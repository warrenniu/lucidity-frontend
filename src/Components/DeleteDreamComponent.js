import React from 'react'
import { connect } from 'react-redux'
import { deleteDream } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function DeleteDreamComponent(props) {

    const clickHandler = () => {
        props.deleteDream(props.currentDream)
        props.history.push('/journals')
    }

    return (
        <div>
            <Button style={{ 'marginRight': '10px' }} color="primary" onClick={() => clickHandler()}>
                Delete
		    </Button>
        </div>
    )
}

function msp(state) {
    return {
        journals: state.journals
    }
}

function mdp(dispatch) {
    return {
        deleteDream: dreamObj => dispatch(deleteDream(dreamObj))
    }
}

export default connect(msp, mdp)(withRouter(DeleteDreamComponent))