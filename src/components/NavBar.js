import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js'

// currentUser is from {connect}
// this is a functional component
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div>
            <NavLink exact  activeClassName="active" to="/posts">Family updates </NavLink>
            <br/>
            <br/>
            <NavLink exact activeClassName="active"  to="/posts/new">Share an update </NavLink>
            <br/>
            <br/>
            <Logout/>       
        </div>             
    )
}
const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
export default connect(mapStateToProps) (NavBar)