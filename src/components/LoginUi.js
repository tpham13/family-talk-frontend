import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginUi = ({ loginFormData, updateLoginForm, login, history }) => {
  const classes = useStyles();
  
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
        ...loginFormData,
        [name]: value
    }
    updateLoginForm(updatedFormInfo)
}

  const handleSubmit = event => {
      event.preventDefault()
      login(loginFormData, history)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="email"
              autoFocus
              value={loginFormData.username} 
              onChange={handleInputChange}
            />
              {/* <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} /> */}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginFormData.password}
              onChange={handleInputChange}
            />
              {/* <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* <input type="submit" value="Log In" /> */}
              Log In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// mapStateToProps is saying: hey redux, we need this chunk of state from store
// Here, we need the loginForm state
// Why do we need mapStateToProps? -> To get state from the store and use them as props
// How do props get to a component?-> Props get pass into a function as an (argument) that is an object
// this gives me an argument coming to this component that looks like this: 
/*{
    username: "", 
    password: ""
}
*/

const mapStateToProps = state => {
  return {
      loginFormData: state.loginForm
  }
}

// connect is a function that take up to 4 arguments and return a function that take a component and return the component

export default connect(mapStateToProps, { updateLoginForm , login})(LoginUi)