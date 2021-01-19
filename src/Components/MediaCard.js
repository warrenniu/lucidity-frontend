import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditDreamModal from './EditDreamModal'
import DeleteDreamComponent from './DeleteDreamComponent'
import CardDetailModal from './CardDetailModal'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(2);

  return (
    <div className="mediaCard">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fyn7bQjEeWYo%2Fhqdefault.jpg&f=1&nofb=1"
          title="dream image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.currentDream.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.currentDream.date}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={props.currentDream.rating} readOnly />
          </Box>
        </CardContent>
      </CardActionArea>
      <CardDetailModal currentDream={props.currentDream} />
      <EditDreamModal currentDream={props.currentDream} />
      <DeleteDreamComponent currentDream={props.currentDream} />
    </Card>
    </div>
  );
}