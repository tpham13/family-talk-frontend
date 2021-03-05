import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (

    <div>
        <h1>Welcome to family talk </h1>
            <Link to="/signup">Sign Up|</Link> OR 
            <Link to="/login">Log In</Link> 

    </div>
)
    

export default Home;