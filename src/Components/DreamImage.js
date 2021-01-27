import React from 'react'
// import Button from '@material-ui/core/Button'
// import { connect } from 'react-redux'
// import { postImage } from '../Redux/actions'

class DreamImage extends React.Component {

    state = {
        image: null
    }

    onImageChange = event => {
        // this.setState({ image: event.target.files[0] });
        this.props.setImage({ image: event.target.files[0] })

    };

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     // this.props.addImage(this.state)
    //     let formData = new FormData();
    //     formData.append('image', this.state.image);

    //     console.log(formData)
    //     fetch('http://localhost:4000/api/v1/dreams', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .catch(error => console.log(error));

    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                    {/* <Button variant="contained" color="secondary" type="submit">
                            Add Image
					</Button> */}
                </form>

            </div>
        )
    }
}

// function mdp(dispatch) {
//     return {postImage: (newImage) => dispatch(postImage(newImage))}
// }

export default DreamImage