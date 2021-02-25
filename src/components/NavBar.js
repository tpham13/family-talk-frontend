import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';

// currentUser is from {connect}
// this is a functional component
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink exact  activeClass to="/posts">My posts |   </NavLink>
            <NavLink exact activeClass to="/posts/new">New post |  </NavLink>
            { loggedIn ? <Logout /> : null} 
            {/* { currentUser ? <strong> Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</strong> : ""} */}
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