import React from 'react' 
import EditDreamComponent from './EditDreamComponent' 
import DeleteDreamComponent from './DeleteDreamComponent'

class DreamComponent extends React.Component {

    render () {
        return (
            <div>
            <h3>DreamComponent</h3>
            {/* {this.props.dreamObj.title} */}
            <EditDreamComponent currentDream={this.props.dreamObj} />
            <DeleteDreamComponent currentDream={this.props.dreamObj}/>
            </div>
        )
    }
}

export default DreamComponent 