import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

// currentUser is from {connect}

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            { currentUser ? <p> Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</p> : ""}
            { currentUser ? <Logout /> : <Login /> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser 
    }
}
export default connect(mapStateToProps) (NavBar)