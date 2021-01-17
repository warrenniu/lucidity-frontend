import React from 'react'
import EditDreamComponent from './EditDreamComponent'
import DeleteDreamComponent from './DeleteDreamComponent'

class DreamComponent extends React.Component {

    render() {
        return (
            <div>
                <h3>DreamComponent</h3>
                <h3>Title: {this.props.dreamObj.title}</h3>
                <p>Rating: {this.props.dreamObj.rating}</p>
                <p>Date: {this.props.dreamObj.date}</p>
                <p>Story: {this.props.dreamObj.story}</p>
                <p>Characters: {this.props.dreamObj.character}</p>
                <p>Places: {this.props.dreamObj.place}</p>
                <p>Actions: {this.props.dreamObj.action}</p>
                <p>Image: {this.props.dreamObj.image}</p>
                
                <EditDreamComponent currentDream={this.props.dreamObj} />
                <DeleteDreamComponent currentDream={this.props.dreamObj} />
            </div>
        )
    }
}

export default DreamComponent 