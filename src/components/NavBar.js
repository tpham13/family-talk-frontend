import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js'

// currentUser is from {connect}
// this is a functional component
const NavBar = ({currentUser}) => {
    return (
        
        <div>
            <h1> {currentUser.attributes.group.group} family</h1> 
            <NavLink exact  activeClassName="active" to="/posts">Family updates </NavLink> 
            <NavLink exact activeClassName="active"  to="/posts/new">Share an update </NavLink> 
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