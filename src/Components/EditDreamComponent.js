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

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        this.props.patchDream(this.state)
        this.props.history.push('/journals')
        
    }

    render() {
        return (
            <div>
                <h3>Edit Dream Component</h3>
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
                        Edit Dream
					</Button>
                </form>
            </div>
        )
    }
}

function msp(state) {
    return {
        journals: state.journals,
        dreams: state.dreams
    }
}

function mdp(dispatch) {
    return {
        patchDream: dreamObj => dispatch(patchDream(dreamObj))
    }
}

export default connect(msp, mdp)(withRouter(EditDreamComponent))