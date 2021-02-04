import React from 'react' 
import { connect } from 'react-redux'

function SortComponent(props) {

    return (
        <div>
<select>
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
</select>

        </div>
    )
}

function msp(state) {
    return {
        dreams: state.dreams,
    }
}

export default connect(msp)(SortComponent)