import React from 'react'
import {connect} from 'react-redux'

function AnalysisComponent(props) {
    return (
        <div>
            <h3>Analysis Component</h3>
        </div>
    )
}

function msp(state) {
    return {
    dreams: state.dreams,
    } 
}

export default connect(msp)(AnalysisComponent)