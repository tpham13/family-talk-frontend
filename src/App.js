import React from 'react';
import Login from './components/Login.js'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
      <Login />
       Hello React
      </div>
    );
  }
  
}

export default connect (null, {getCurrentUser } ) (App);
