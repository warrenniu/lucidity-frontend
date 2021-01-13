import React from 'react'
import JournalComponent from '../Containers/JournalContainer'
import CreateJournalComponent from '../Components/CreateJournalComponent'


class JournalContainer extends React.Component {
    render() {
        return (
            <div>
                <h3>Journal Container</h3>
                <JournalComponent />
                <CreateJournalComponent />
            </div>
        )

    }
}

export default JournalContainer