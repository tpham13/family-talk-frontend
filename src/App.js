import React from 'react';
import Login from './components/Login.js';
import Logout from './components/Logout.js'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      // is there a currentUser?, if there is, display Logout, if not, display Login
      this.props.currentUser ? <Logout /> : <Login />
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
