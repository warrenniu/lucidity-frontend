import React from 'react'
import SignUpComponent from './SignUpComponent'
import Typography from '@material-ui/core/Typography';

function HomeComponent() {
    return (
        <div className="homePage">
            <Typography variant="h4" gutterBottom id="header">
            Welcome to Lucidity</Typography>
            <br></br>
            <SignUpComponent />
            <br></br>
            <p className="description">"Dreams are real while they last - can we say more of life?" - Havelock Ellis <br></br><br></br>As human beings, we spend an average of 33% of our life in a unconcious state of slumber. Oftentimes during this state, our minds go on exhilirating & unexplainable experiences. However, with each waking second, the experience of the dream fades away, And after a few minutes, you can hardly even remember the experience at all.<br></br><br></br>Capturing your experiences not only retain its details, but allows you to actually process it. It can potentially reduce stress, spark your creative mind, come up with an amazing idea, solve problems, and learn from mistakes.<br></br><br></br>What're you waiting for? Capture your Dreams now.</p>
        </div>
    )
}

export default HomeComponent