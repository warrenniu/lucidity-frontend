import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { removeUser } from '../Redux/actions'
import SearchComponent from './SearchComponent'

class NavComponent extends React.Component {

    logOutHandler = () => {
        localStorage.removeItem("token")
        this.props.removeUser()
    }

    render() {
        return (
            <div>
				{this.props.user ?
					<div>
                        <SearchComponent />
						{/* <Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/home">
							Home
						</Button> */}

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/journals">
							Journals
						</Button>

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/journals/analysis">
							Analysis
						</Button>

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/login" onClick={() => this.logOutHandler()}>
							Log Out
						</Button>
					</div>
					:
					<div>
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/home">
							Home
						</Button>
						
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/login">
							Log In
						</Button>
					</div>
				}
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
		removeUser: () => dispatch(removeUser())
	}
}



export default connect(msp, mdp)(NavComponent)