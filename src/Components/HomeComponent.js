import React from 'react'
import SignUpComponent from './SignUpComponent'

function HomeComponent(props) {
    return (
        <div style={{
            'textAlign': 'center',
        }}>
            <h3 id="header" style={{
                'textAlign': 'center'
            }}>Welcome to Lucidity</h3>
            <br></br>
            <SignUpComponent style={{
                'width': '750px',
                'textAlign': 'right',
            }} />
            <br></br>
            <p style={{
            'border': '2px solid white',
            'borderRadius': '3%',
            'boxShadow': `5px 5px 5px 2px lightgrey`,
            'width': '750px',
            'padding': '15px',
            'marginTop': '10px',
            'textAlign': 'center',
        }}>Introducing Lucidity - the App for your dreams! As human beings, we spend an average of 33% of our life in a unconcious state of slumber. Oftentimes during this state, our minds go on exhilirating & unexplainable experiences. However, with each waking second, the experience of the dream fades away, And after a few minutes, you can hardly even remember the experience at all.<br></br><br></br>Capturing your experiences not only retain its details, but allows you to actually process it. It can potentially reduce stress, spark your creative mind, come up with an amazing idea, solve problems, and learn from mistakes.<br></br><br></br>What're you waiting for? Capture your Dreams now.</p>
        </div>
    )
}

export default HomeComponent