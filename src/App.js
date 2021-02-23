import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Posts from './components/Posts.js';
import  { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return ( 
      <Router>
      <div className="App">
      <NavBar />
      
        
        <Route exact path='/login' component={Login}/>
        <Route exact path='/posts' component={Posts}/>
        
      
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

const mapStateToProps = ({currentUser}) => {
  return ({
    currentUser
  })
}
  


// {getCurrentUser} here is using mapDispatchToProps
export default connect (mapStateToProps, {getCurrentUser } ) (App);
