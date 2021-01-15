import React from 'react'
import { connect } from 'react-redux'
import { postDream } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class CreateDreamComponent extends React.Component {

    state = {
        title: "",
        rating: "",
        date: "",
        story: "",
        character: "",
        place: "",
        action: "",
        image: "",
        journal_id: this.props.journalId

    }
    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        this.props.postDream(this.state)
        this.setState({ title: "", rating: "", date: "", story: "", character: "", place: "", action: "", image: "" })
    }

    render() {
        return (
            <div>
                <h3>Create Dream Component</h3>
                <form style={{ 'marginBottom': '15px' }} onSubmit={this.formSubmitHandler}>
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Rating" name="rating" value={this.state.rating} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Date" name="date" value={this.state.date} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Story" name="story" value={this.state.story} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Character" name="character" value={this.state.character} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Place" name="place" value={this.state.place} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Action" name="action" value={this.state.action} onChange={this.inputChangeHandler} />
                    <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Image" name="image" value={this.state.image} onChange={this.inputChangeHandler} />
                    <Button variant="contained" color="secondary" type="submit">
                        Add Dream
					</Button>
                </form>
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

function mdp(dispatch) {
    return {
        postDream: newDreamObj => dispatch(postDream(newDreamObj))
    }
}

export default connect(msp, mdp)(withRouter(CreateDreamComponent))