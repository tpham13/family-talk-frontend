import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import './App.css';
import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return ( 
      <div className="App">
      <NavBar />
      <MainContainer />
      </div>
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
