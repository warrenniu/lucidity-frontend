import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { postDream } from '../Redux/actions'
import { withRouter } from 'react-router-dom'

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

function CreateDreamModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useInput("")
    const [rating, setRating] = useInput("")
    const [date, setDate] = useInput("")
    const [story, setStory] = useInput("")
    const [character, setCharacter] = useInput("")
    const [place, setPlace] = useInput("")
    const [action, setAction] = useInput("")
    const [image, setImage] = useInput("")
    // const state = {
    //     title: props.currentDream.title,
    //     rating: props.currentDream.rating,
    //     date: props.currentDream.date,
    //     story: props.currentDream.story,
    //     character: props.currentDream.character,
    //     place: props.currentDream.place,
    //     action: props.currentDream.action,
    //     image: props.currentDream.image,
    //     id: props.currentDream.id
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.postDream(props.journalObj)
        props.history.push('/journals')

    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab color="secondary" aria-label="add" type="button" onClick={handleOpen}>
                <AddIcon />
            </Fab>
            <Modal
                aria-labelledby="modal-dream-title"
                aria-describedby="modal-dream-story"
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
                    <form style={{ 'marginBottom': '15px' }} onSubmit={() => formSubmitHandler} className={classes.paper}>
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Title" name="title" value={title} onChange={setTitle} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Rating" name="rating" value={rating} onChange={setRating} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Date" name="date" value={date} onChange={setDate} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Story" name="story" value={story} onChange={setStory} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Character" name="character" value={character} onChange={setCharacter} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Place" name="place" value={place} onChange={setPlace} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Action" name="action" value={action} onChange={setAction} />
                        <input className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Image" name="image" value={image} onChange={setImage} />
                        <Button variant="contained" color="secondary" type="submit">
                            Add Dream
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
        postDream: newDreamObj => dispatch(postDream(newDreamObj))
    }
}

export default connect(msp, mdp)(withRouter(CreateDreamModal))