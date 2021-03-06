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
import DreamImage from './DreamImage'
// import { DirectUpload } from 'activestorage';

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

// function onImageChange(initialValue) {
//     const [value, setValue] = useState(initialValue);

//     function handleChange(event) {
//         setValue({image: event.target.files[0]})
//     }

//     return [value, handleChange];
// }

function CreateDreamModal(props) {
    const currentDate = new Date()
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useInput("")
    const [rating, setRating] = useInput("")
    const [selectedDate, setSelectedDate] = React.useState(new Date(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1} - ${currentDate.getDay()}`))
    const [story, setStory] = useInput("")
    const [character, setCharacter] = useInput("")
    const [place, setPlace] = useInput("")
    const [image, setImage] = useInput("")
    // const [image, setImage] = useState("")

    const handleDateChange = (date) => {
        const dateString = date.toString()
        const newDate = dateString.split("-")
        const finalDate = newDate[0].split(" ")
        const dateFormat = `${finalDate[1]} ${finalDate[2]} ${finalDate[3]}`
        setSelectedDate(dateFormat);
    };

    const formSubmitHandler = (event) => {
        // const token = localStorage.getItem("token")
        event.preventDefault()
        const newDream = {
            title: title,
            rating: rating,
            date: selectedDate,
            story: story,
            character: character,
            place: place,
            image: image,
            journal_id: props.journalId

        }

        // fetch('http://localhost:4000/api/v1/dreams', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json', 
        //         'Accept': 'application/json',
        //         Authorization: `Bearer ${token}`
        //     }, 
        //     body: JSON.stringify(newDream)
        // })
        // .then(response => response.json())
        // .then(data => uploadFile(image, data))


        console.log(newDream)
        props.postDream(newDream)
        // let formData = new FormData();
        // formData.append('image', newDream.image);
        // console.log(formData)
        // props.postDream(newDream)
        // fetch('http://localhost:4000/api/v1/dreams', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .catch(error => console.log(error));
        // this.setState({ title: "", rating: "", date: "", story: "", character: "", place: "", action: "", image: "" })
        // props.history.push('/journals')



        /********************* Attempt to reset Form (FAILED) *************************/
        // document.getElementById("createForm").reset()
        // event.target.reset()

        /********************* Attempt to reset Form (FAILED) *************************/
        let btnClear = document.querySelector('.addDreamBtn')
        let inputs = document.querySelectorAll('.inputOverride')
        console.log("in Create Dream", btnClear)
        console.log("in Create Dream", inputs)

        btnClear.addEventListener('click', () => {
            inputs.forEach(input => input.value = "")
        })

    }

    // const uploadFile = (file, dream) => {
    //     const upload = new DirectUpload(file, 'http://localhost:4000/api/v1/rails/active_storage/direct_uploads')
    //     console.log(upload, file)
    //     upload.create((error, blob) => {
    //         console.log(blob)
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             fetch(`http://localhost:4000/api/v1/dreams/${dream.id}`, {
    //                 method: 'PUT', 
    //                 headers: {
    //                     'Content-Type': 'application/json', 
    //                     'Accept': 'application/json'
    //                 }, 
    //                 body: JSON.stringify({image: blob.signed_id})
    //             })
    //             .then(response => response.json())
    //             .then(result => console.log(result))
    //         }
    //     })
    // }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false); 
    };

    return (
        <div>
            <Fab className="addDream" color="secondary" aria-label="add" type="button" onClick={handleOpen}>
                <AddIcon />
            </Fab>
            {/* <Button variant="contained" color="secondary" type="button" onClick={handleOpen}>
                Add Dream
      </Button> */}
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
                    <form id="createForm" style={{ 'marginBottom': '15px' }} onSubmit={formSubmitHandler.bind()} className={classes.paper}>
                        <TextField label="Title" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Title" name="title" value={title} onChange={setTitle} />
                        <Box className="ratingForm" component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={setRating}
                            />
                        </Box>
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
                        <TextField id="outlined-basic" label="Image" className='inputOverride' style={{ 'marginRight': '15px' }} type="text" placeholder="Image - paste URL" name="image" value={image} onChange={setImage} />
                        {/* <input type="file" accept="image/*" multiple={false} value={image} onChange={setImage} /> */}
                        <DreamImage setImage={setImage} />
                        <Button className='addDreamBtn' variant="contained" color="secondary" type="submit">
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