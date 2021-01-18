import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TransitionsModal from './TransitionsModal'

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

  return (
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
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {props.currentDream.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
      <TransitionsModal currentDream={props.currentDream} />
    </Card>
  );
}