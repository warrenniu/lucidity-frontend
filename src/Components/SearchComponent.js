import React from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { search } from '../Redux/actions'

class SearchComponent extends React.Component {

    searchChangeHandler = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <div className="searchComponent">
                <TextField id="standard-search" label="Search dreams" onChange={this.searchChangeHandler} type="search" />
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        search: value => dispatch(search(value))
    }
}



export default connect(null, mdp)(SearchComponent)