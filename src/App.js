import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavComponent from './Components/NavComponent'
// import Material from './Components/NavComponent'
import SignUpComponent from './Components/SignUpComponent'
import LogInComponent from './Components/LogInComponent'
import HomeComponent from './Components/HomeComponent'
import JournalContainer from './Containers/JournalContainer'
import MainContainer from './Containers/MainContainer'
// import {connect} from 'react-redux'
// import {getUser} from './Redux/actions'
import './App.css';

class App extends React.Component {

//   componentDidMount() {
//     // this.props.getJournals()
//     if (!this.props.user) {
//     this.props.getUser()
//     console.log("in componentDidMount")
//     }
// }

  render() {

    return (
      <div className="parent">
        {/* {this.props.user !== null ? <JournalContainer /> : null}  */}
        <div className="div1">
          <img alt="Lucidity logo" />
        </div>
        <div className="div2">
          <NavComponent />
        </div>
        <div className="div3">
        </div>
        <div className="div4">
          <Switch>
            <Route path="/login" component={LogInComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/journals" exact component={JournalContainer} />
            <Route path="/" component={MainContainer} />
          </Switch>
        </div>
        <div className="div5">
          <p style={{ 'color': 'black', 'fontSize': '16px' }}>Copyright 2021 Lucidity: A Warren Niu Project</p>
          <a href="https://github.com/warrenniu/lucidity-frontend" target="_blank" rel="noreferrer"><img src="/github.png" alt="github" /></a>
        </div>
      </div>
    )
  }
}

// function msp(state) {
//   return {
//       user: state.user,
//       journals: state.journals
//   }
// }

// function mdp(dispatch) {
//   return {
//       // getJournals: () => dispatch(getJournals()),
//       getUser: () => dispatch(getUser())
//   }
// }

export default (withRouter(App));
