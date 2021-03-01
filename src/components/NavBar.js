import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
// material UI:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// currentUser is from {connect}
// this is a functional component
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    { loggedIn ? <><h3 id="loggedin">Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</h3><Logout /></> : null } 
                    <NavLink exact  activeClassName="active" to="/posts">My posts |   </NavLink>
                    <NavLink exact activeClassName="active"  to="/posts/new">New post |  </NavLink>

                    </Typography>
                    {/* <NavLink exact  activeClassName="active" to="/posts">My posts |   </NavLink>
                    <NavLink exact activeClassName="active"  to="/posts/new">New post |  </NavLink> */}

                </Toolbar>

            </AppBar>
            {/* <NavLink exact  activeClassName="active" to="/posts">My posts |   </NavLink>
            <NavLink exact activeClassName="active"  to="/posts/new">New post |  </NavLink> */}
            {/* { loggedIn ? <><h3 id="loggedin">Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</h3><Logout /></> : null }  */}
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