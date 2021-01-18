import React from 'react'
import EditDreamComponent from './EditDreamComponent'
import DeleteDreamComponent from './DeleteDreamComponent'
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import TransitionsModal from './TransitionsModal'
// import image from '../Images/cocktail.jpeg'


// const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   }));

class DreamComponent extends React.Component {

    render() {
        return (
            <div>
                <div
                id="dreamComponent" style={{
                    'border': '2px solid white',
                    'borderRadius': '3%',
                    'boxShadow': `5px 5px 5px 2px lightgrey`,
                    'width': '250px',
                    'padding': '15px',
                    'textAlign': 'center',
                }}>
                <Card variant="outlined" className="dreamCard">
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.dreamObj.title}
                        subheader={this.props.dreamObj.date}
                    />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Rating: {this.props.dreamObj.rating}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Image: {this.props.dreamObj.image}

                        </Typography>
                    </CardContent>
            
                    <TransitionsModal currentDream={this.props.dreamObj} />
                </Card>
                </div>
                <EditDreamComponent currentDream={this.props.dreamObj} />
                <DeleteDreamComponent currentDream={this.props.dreamObj} />
            </div>
        )
    }
}

export default DreamComponent 