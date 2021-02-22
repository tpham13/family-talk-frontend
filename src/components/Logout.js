import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Log Out" />
        </form>

    )
}

export default connect(null, { logout })(Logout)