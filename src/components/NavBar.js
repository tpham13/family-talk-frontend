import React from 'react';
import { connect } from 'react-redux';


// currentUser is from {connect}

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            { currentUser ? <strong> Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</strong> : ""}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser 
    }
}
export default connect(mapStateToProps) (NavBar)