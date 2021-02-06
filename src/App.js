import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavComponent from './Components/NavComponent'
import SignUpComponent from './Components/SignUpComponent'
import LogInComponent from './Components/LogInComponent'
import HomeComponent from './Components/HomeComponent'
import JournalContainer from './Containers/JournalContainer'
import MainContainer from './Containers/MainContainer'
import AnalysisComponent from './Components/AnalysisComponent'
import SideBar from "./Components/SideBar";
import {connect} from 'react-redux'
import {getUser} from './Redux/actions'
import './App.css';


class App extends React.Component {

BASE_URL = "http://lucidityapp.herokuapp.com"

componentDidMount() {
  const token = localStorage.getItem("token")
		if (token) {
			fetch(`${this.BASE_URL}/api/v1/profile`, {
				method: "GET",
				headers: {Authorization: `Bearer ${token}`},
			})
				.then(resp => resp.json())
				.then(data => {
					this.props.getUser(data)
					this.props.history.push('/home')
				})
			} else {
				this.props.history.push('/home')
			}
}

  render() {

    return (
      <div className="parent">
        <div className="div1">
          <img src="/Lucidity Logo.png" alt="Lucidity logo" />
        </div>
        <div className="div2">
        <NavComponent />
        </div>
        <div className="div3">
           <SideBar /> 
          <Switch>
            <Route path="/journals/analysis" component={AnalysisComponent} />
            <Route exact path="/journals/:id" component={JournalContainer} />
            <Route path="/login" component={LogInComponent} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/journals" exact component={JournalContainer} /> 
            <Route path="/" component={MainContainer} />
          </Switch>
        </div>
        <div className="div4">
          <p style={{ 'color': 'black', 'fontSize': '16px' }}>Copyright 2021 Lucidity: A Warren Niu Project</p>
          <a href="https://github.com/warrenniu/lucidity-frontend" target="_blank" rel="noreferrer"><img src="/github.png" alt="github" /></a>
        </div>
      </div>
    )
  }
}

function msp(state) {
  return {
      user: state.user,
  }
}

function mdp(dispatch) {
  return {
      getUser: currentUser => dispatch(getUser(currentUser))
  }
}

export default connect(msp, mdp)(withRouter(App));
