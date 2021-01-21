import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { patchDream } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

function EditDreamModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useInput(props.currentDream.title)
    const [rating, setRating] = useInput(props.currentDream.rating)
    const [date, setDate] = useInput(props.currentDream.date)
    const [story, setStory] = useInput(props.currentDream.story)
    const [character, setCharacter] = useInput(props.currentDream.character)
    const [place, setPlace] = useInput(props.currentDream.place)
    const [action, setAction] = useInput(props.currentDream.action)
    const [image, setImage] = useInput(props.currentDream.image)

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const updatedDream = {
            title: title,
            rating: rating,
            date: date,
            story: story,
            character: character,
            place: place,
            action: action,
            image: image,
            id: props.currentDream.id

        }
        props.patchDream(updatedDream)
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
            <Button color="primary" type="button" onClick={handleOpen}>
                Edit
      </Button>
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
                    <form style={{ 'marginBottom': '15px' }} onSubmit={formSubmitHandler} className={classes.paper}>
                        <TextField id="outlined-basic" label="Title" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Title" name="title" value={title} onChange={setTitle} />
                        <br></br>
                        {/* <TextField id="outlined-basic" label="Rating" className='inputOverride' style={{ 'marginRight': '15px' }} type="integer" placeholder="Rating" name="rating" value={rating} onChange={setRating} /> */}
                        <Box className="ratingForm" component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={setRating}
                            />
                        </Box>
                        <TextField label="Date" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Date" name="date" value={date} onChange={setDate} />
                        <br></br>
                        <TextField label="Story" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Story" name="story" value={story} onChange={setStory} />
                        <br></br>
                        <TextField label="Character" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Character" name="character" value={character} onChange={setCharacter} />
                        <br></br>
                        <TextField label="Place" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Place" name="place" value={place} onChange={setPlace} />
                        <br></br>
                        <TextField label="Action" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Action" name="action" value={action} onChange={setAction} />
                        <br></br>
                        <TextField label="Image" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Image" name="image" value={image} onChange={setImage} />
                        <Button variant="contained" color="secondary" type="submit">
                            Edit Dream
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
        patchDream: dreamObj => dispatch(patchDream(dreamObj))
    }
}

export default connect(msp, mdp)(withRouter(EditDreamModal))