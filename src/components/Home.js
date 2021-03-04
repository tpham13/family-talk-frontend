import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (

    <div>
        <h3>Welcome, please 
            <img href="https://images-na.ssl-images-amazon.com/images/I/71rFdxgErpL._SS210_.png"></img>
            <Link to="/signup">Sign Up</Link> OR 
            <Link to="/login">Log In</Link> </h3>

    </div>
)
    

export default Home;