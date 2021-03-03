import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    
  }));

// currentUser is from {connect}
// this is a functional component
const NavBar = ({ currentUser, loggedIn }) => {
    const classes = useStyles();
    return (
        <div className="navBar">
            {/* <p>{ loggedIn ? <><h1 id="loggedin">Welcome, {currentUser.attributes.name} from {currentUser.attributes.group.name} family!</h1></> : null } </p> */}

            <p>Let's start sharing! Anything you want! The family want to know.</p>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        <NavLink exact  activeClassName="active" to="/posts"> {currentUser.attributes.group.name}'s posts</NavLink>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        <NavLink exact activeClassName="active"  to="/posts/new">Want to share something?</NavLink>
                    </Button>  
                </Grid>
                <Grid item>
                    <Logout />
                </Grid>
                </Grid>
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