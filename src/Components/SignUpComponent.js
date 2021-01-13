import React from 'react'
import {connect} from 'react-redux'
import {postUser} from '../Redux/actions'
import {withRouter} from 'react-router-dom'

class SignUpComponent extends React.Component {
    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }
    render() {
    return (
        <div>
            <h3>Sign Up Component</h3>
            <form>
            <input className='inputOverride' style={{'marginBottom': '10px'}} type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
            <input className='inputOverride' style={{'marginBottom': '10px'}} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
            </form>
        </div>
    )
    }
}

export default SignUpComponent