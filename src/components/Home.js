import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import { Link } from 'react-router-dom'


const Home = ({}) => (

    <div>
        <h3>Welcome, please <Link to="/signup">Sign Up</Link> OR <Link to="/login" value="Log">Log In</Link> </h3>
        {/* <Link to="/signup">Sign Up</Link> OR <Link to="/login">Log In</Link>  */}

    </div>
)
    

export default Home;