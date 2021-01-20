import React from 'react'
import MediaCard from './MediaCard'


class DreamComponent extends React.Component {

    render() {
        return (
            <div className="mediaCard">
                <MediaCard currentDream={this.props.dreamObj} />
            </div>
        )
    }
}

export default DreamComponent 