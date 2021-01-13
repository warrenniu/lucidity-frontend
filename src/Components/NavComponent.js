import React from 'react' 
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class NavComponent extends React.Component {
    render () {
        return (
            <div id="navComponent">
                <div>
                <Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/home">
							Home
				</Button><br />

                <Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/journals/">
							Journal
				</Button><br />

                <Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/journals/analysis">
							Analysis
				</Button><br />

                <Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/login">
							Log In
				</Button><br />

                </div>
            </div>
        )
    }
}

export default NavComponent