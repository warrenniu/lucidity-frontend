import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import SearchComponent from './SearchComponent'

class NavComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.user ? <SearchComponent /> : null}

                    <Button style={{ 'fontSize': '20px' }} color="primary" component={RouterLink} to="/home">
                        Home
				</Button>

                    {this.props.user ?
                        <Button style={{ 'fontSize': '20px' }} color="primary" component={RouterLink} to="/journals/">
                            Journal
				</Button>
                        :
                        null
                    }

                    {this.props.user ?
                        <Button style={{ 'fontSize': '20px' }} color="primary" component={RouterLink} to="/journals/analysis">
                            Analysis
				</Button>
                        :
                        null
                    }

                    <Button style={{ 'fontSize': '20px' }} color="primary" component={RouterLink} to="/login">
                        Log In
				</Button>

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



export default connect(msp)(NavComponent)