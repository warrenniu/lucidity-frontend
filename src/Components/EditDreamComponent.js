import React from 'react'
import { connect } from 'react-redux'
import { patchDream } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class EditDreamComponent extends React.Component {

    state = {
        title: this.props.currentDream.title,
        rating: this.props.currentDream.rating,
        date: this.props.currentDream.date,
        story: this.props.currentDream.story,
        character: this.props.currentDream.character,
        place: this.props.currentDream.place,
        action: this.props.currentDream.action,
        image: this.props.currentDream.image,
        id: this.props.currentDream.id
    }
    render() {
        return (
            <div>
                <h3>Edit Dream Component</h3>
            </div>
        )
    }
}

export default EditDreamComponent