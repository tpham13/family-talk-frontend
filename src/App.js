import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
// import NavBar from './components/NavBar.js'
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Posts from './components/Posts.js';
import Home from './components/Home.js';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return ( 
      <Router>
      <div className="App">
      <Switch>
      {/* render can take a function */}
      
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/' render={() => loggedIn ? <Posts /> : <Home />}/>
        <Route exact path='/posts' component={Posts}/>
        
      </Switch>
      </div>
      
      </Router>
    );
  }
}

/* I can do this b/c I know the incoming argument is an object, state, coming from import { connect } from 'react-redux'
and I know it has a property called currentUser
state = {..., 
  currentUser: {...}
}
*/

const mapStateToProps = state => {
  return ({
    // manipulate redux state and only grab what we need: is the user logged in or not
    loggedIn: !!state.currentUser
  })
}
  


// {getCurrentUser} here is using mapDispatchToProps
export default connect (mapStateToProps, {getCurrentUser } ) (App);
