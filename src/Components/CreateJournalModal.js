import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux' 
import { postJournal } from '../Redux/actions'
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
    root: {
        width: '25ch'
    },
}));

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return [value, handleChange];
}

function CreateJournalModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [year, setYear] = useInput("")
    const [month, setMonth] = useInput("")

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const newJournal = {
            year: year,
            month: month,
            // user_id: props.user_id
            user_id: 1

        }
        props.postJournal(newJournal)
        // this.setState({ year: "", month: "" })
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
                Create Journal
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
                        <TextField id="outlined-basic" label="Year" className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Year" name="year" value={year} onChange={setYear} />
                        <br></br>
                        <TextField id="outlined-basic" label="Month" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Date" name="date" value={month} onChange={setMonth} />
                        <Button variant="contained" color="secondary" type="submit">
                            Create Journal
					</Button>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
}
function msp(state) {
    return {
        user: state.user,
        journals: state.journals
    }
}

function mdp(dispatch) {
    return {
        postJournal: newJournalObj => dispatch(postJournal(newJournalObj)) 
    }
}

export default connect(msp, mdp)(withRouter(CreateJournalModal))