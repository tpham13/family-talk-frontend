import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js'
// Logout does not have router props (history, location, map)because it's a child of a route. Logout is a child of NavBar
import { withRouter } from 'react-router-dom'; 

const Logout = ({ logout, history}) => {
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
           logout()
           history.push('/')
        }
      }>
        <input type="submit" value="Log Out"/>
      </form>
    )
  }

export default withRouter(connect(null, { logout })(Logout))