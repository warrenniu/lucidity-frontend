import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { patchJournal } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return [value, handleChange];
}

function EditJournalModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useInput(props.currentJournal.title)
    const [year, setYear] = useInput(props.currentJournal.year)
    const [month, setMonth] = useInput(props.currentJournal.month)

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const updatedJournal = {
            title: title,
            year: year,
            month: month,
            id: props.currentJournal.id

        }
        props.patchJournal(updatedJournal)
        // props.history.push('/journals')

    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" type="button" onClick={handleOpen}>
                Edit Journal
      </Button>
            <Modal
                aria-labelledby="modal-journal-year"
                aria-describedby="modal-journal-month"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <form style={{ 'marginBottom': '15px' }} onSubmit={formSubmitHandler} className={classes.paper}>
                        <TextField label="Title" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Title" name="title" value={title} onChange={setTitle} />
                        <br></br>
                        <TextField label="Year" className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Year" name="year" value={year} onChange={setYear} />
                        <br></br>
                        <TextField label="Month" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Month" name="month" value={month} onChange={setMonth} />
                        <Button variant="contained" color="secondary" type="submit">
                            Edit Journal
					</Button>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
}
function msp(state) {
    return {
        journals: state.journals,
        dreams: state.dreams
    }
}

function mdp(dispatch) {
    return {
        patchJournal: journalObj => dispatch(patchJournal(journalObj))
    }
}

export default connect(msp, mdp)(withRouter(EditJournalModal))