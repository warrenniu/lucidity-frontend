import React from 'react'
import { connect } from 'react-redux'
import { postUser } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class SignUpComponent extends React.Component {
    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    handleDateChange = (date) => {
        const dateString = date.toString()
        const newDate = dateString.split("-")
        const finalDate = newDate[0].split(" ")
        const dateFormat = `${finalDate[1]} ${finalDate[2]} ${finalDate[3]}`
        this.setState({
            birthday: dateFormat});
    };

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
                    <TextField className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
                    <TextField className='inputOverride' style={{ 'marginBottom': '10px' }} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
                    <TextField className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} /><br />
                    <TextField className='inputOverride' style={{ 'marginBottom': '10px' }} type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} /><br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <KeyboardDatePicker
                                className='inputOverride'
                                disableToolbar
                                variant="inline"
                                placeholder="Birthday"
                                format="MM/dd/yyyy"
                                margin="normal"
                                value={this.state.birthday}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <br></br>
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