import React from 'react'
import { connect } from 'react-redux'
import { deleteDream } from '../Redux/actions'
import Button from '@material-ui/core/Button'

function DeleteDreamComponent(props) {

    const clickHandler = () => {
        props.deleteDream(props.currentDream)
    }

    return (
        <div>
            <Button style={{ 'marginRight': '10px' }} color="primary" onClick={() => clickHandler()}>
                Delete
		    </Button>
        </div>
    )
}

function mdp(dispatch) {
    return {
        deleteDream: dreamObj => dispatch(deleteDream(dreamObj))
    }
}

export default connect(null, mdp)(DeleteDreamComponent)