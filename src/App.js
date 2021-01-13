import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import NavComponent from './Components/NavComponent'
import SignUpComponent from './Components/SignUpComponent'
import LogInComponent from './Components/LogInComponent'
import HomeComponent from './Components/HomeComponent'
import JournalContainer from './Containers/JournalContainer'
import './App.css';

class App extends React.Component {

  render () {

    return (
      <div>
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
            <Route path="/" component={JournalContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
