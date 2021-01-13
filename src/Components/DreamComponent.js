import React from 'react' 
import EditDreamComponent from './EditDreamComponent' 
import DeleteDreamComponent from './DeleteDreamComponent'

class DreamComponent extends React.Component {
    render () {
        return (
            <div>
            <h3>DreamComponent</h3>
            <EditDreamComponent />
            <DeleteDreamComponent />
            </div>
        )
    }
}

export default DreamComponent 