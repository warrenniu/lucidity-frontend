import React from 'react'
import CreateDreamModal from './CreateDreamModal'
import DreamContainer from '../Containers/DreamContainer'
import EditJournalModal from './EditJournalModal'
import DeleteJournalComponent from '../Components/DeleteJournalComponent'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class JournalComponent extends React.Component {

    render() {
        return (
            <div style={{
                'width': '100%'
            }}>
                <Box m={1} p={2}>
                <Typography variant="h5">{this.props.journalObj.title}</Typography>
                </Box>
                <br></br>
                <DreamContainer journalId={this.props.journalObj.id} />
                <CreateDreamModal journalId={this.props.journalObj.id} />
                <br></br>
                <br></br>
                <EditJournalModal currentJournal={this.props.journalObj} />
                <br></br>
                <DeleteJournalComponent currentJournal={this.props.journalObj} />
            </div>
        )
    }
}

export default JournalComponent