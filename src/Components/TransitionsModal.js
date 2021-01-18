import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'

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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" type="button" onClick={handleOpen}>
        Open Dream
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
          <div className={classes.paper}>
            <h2 id="modal-dream-title">{props.currentDream.title}</h2>
            <p id="modal-dream-story">{props.currentDream.story}</p>
            <p id="modal-dream-character">Characters: {props.currentDream.character}</p>
            <p id="modal-dream-place">Place: {props.currentDream.place}</p>
            <p id="modal-dream-action">Action: {props.currentDream.action}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}