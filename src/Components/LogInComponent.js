import React from 'react'
import { connect } from 'react-redux'
import { postLogin } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

class LogInComponent extends React.Component {
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
        this.props.postLogin(this.state)
        this.props.history.push('/journals')
    }
    render() {
        return (
            <div className="homePage">
                <div id="loginComponent" style={{
                    'border': '2px solid white',
                    'borderRadius': '3%',
                    'boxShadow': `5px 5px 5px 2px lightgrey`,
                    'width': '250px',
                    'padding': '15px',
                    'textAlign': 'center',
                }}>
                    <Typography variant="h6">Welcome back, Dreamer</Typography>
                    <br></br>
                    <form onSubmit={this.submitHandler}>
                        <input className='inputOverride' style={{ 'marginBottom': '10px' }} autocomplete="off" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
                        <input className='inputOverride' style={{ 'marginBottom': '10px' }} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
                        <Button variant="contained" color="secondary" type="submit">
                            Log In
			</Button>
                    </form>
                </div>
            </div>
        )
    }
}

function msp(state) {
    return {
        user: state.user
    }
}

function mdp(dispatch) {
    return {
        postLogin: userInfo => dispatch(postLogin(userInfo))
    }
}

export default connect(msp, mdp)(withRouter(LogInComponent))