import React from 'react'
import { connect } from 'react-redux'
import { postUser } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

class SignUpComponent extends React.Component {
    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.postUser(this.state)
        this.props.history.push('/login')
    }
    render() {
        return (
            <div id="signupComponent">
                <Typography variant="h6">Capture your Dreams</Typography>
                <br></br>
                <form onSubmit={this.submitHandler}>
                    <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
                    <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
                    <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} /><br />
                    <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} /><br />
                    <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="birthday" placeholder="Birthday (Ex. September 22 1988)" value={this.state.birthday} onChange={this.changeHandler} /><br />
                    <Button variant="contained" color="secondary" type="submit">
                        Sign Up
			        </Button>
                </form>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        postUser: newUserObj => dispatch(postUser(newUserObj))
    }
}

export default connect(null, mdp)(withRouter(SignUpComponent))