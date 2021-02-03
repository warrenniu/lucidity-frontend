import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { patchDream } from '../Redux/actions'
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


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
    const [selectedDate, setSelectedDate] = useState(props.currentDream.date)
    const [story, setStory] = useInput(props.currentDream.story)
    const [character, setCharacter] = useInput(props.currentDream.character)
    const [place, setPlace] = useInput(props.currentDream.place)
    const [action, setAction] = useInput(props.currentDream.action)
    const [image, setImage] = useInput(props.currentDream.image)

    const handleDateChange = (date) => {
        const dateString = date.toString()
        const newDate = dateString.split("-")
        const finalDate = newDate[0].split(" ")
        const dateFormat = `${finalDate[1]} ${finalDate[2]} ${finalDate[3]}`
        setSelectedDate(dateFormat);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const updatedDream = {
            title: title,
            rating: rating,
            date: selectedDate,
            story: story,
            character: character,
            place: place,
            action: action,
            image: image,
            id: props.currentDream.id

        }
        props.patchDream(updatedDream)
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
                        <Box className="ratingForm" component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={setRating}
                            />
                        </Box>
                        {/* <TextField label="Date" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Date" name="date" value={date} onChange={setDate} /> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
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

function mdp(dispatch) {
    return {
        patchDream: dreamObj => dispatch(patchDream(dreamObj))
    }
}

export default connect(null, mdp)(EditDreamModal)