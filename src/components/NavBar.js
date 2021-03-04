import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import './NavBar.css';


// const useStyles = makeStyles((theme) => ({
//     icon: {
//       marginRight: theme.spacing(2),
//     },
//     heroContent: {
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//       marginTop: theme.spacing(4),
//     },
    
//   }));

// currentUser is from {connect}
// this is a functional component
const NavBar = ({ currentUser, loggedIn }) => {
    // const classes = useStyles();
    return (
        <body >
        <div>
            
                <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/posts">Family Updates</a></li>
                <li><a href="/posts/new">Share an update</a></li>
                <Logout/>
                </ul>
                
        </div>  
        </body> 
                 
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
export default connect(mapStateToProps) (NavBar)