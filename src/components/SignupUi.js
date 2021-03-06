import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://t1.pixers.pics/img-1fb6f67c/framed-canvas-prints-vintage-woman-talking-on-the-phone.jpg?H4sIAAAAAAAAA3WOW26EMAxFtxMkgh3IA1jA_M4SUAAzpQUSJZkymtU3qOpnZcmPa137wPOIdiGY6EgUYF_neSNY1i1PsQ8U1zcxpWSJRZ_VjSHmzn1TmILzjOcNN22pUZeqrYv-tNm42_DFPlLysQeITeXXV76WyxRh2iPUKDQIBGUWUlphKwTh4MZg39xvLh2OB7tbPgc6-aW603KNvNMvhbyt_PEo8Yrij1AilvIiS2HdWUZ1GSKxT_8o4B-Q3x6yC253kAZ0d-VWXNJwu0ujO2laMYzSqGbsUMrRiAWJbK3qhmohqekWM1b5yw_klVDPRwEAAA==)',
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

const SignupUi = ({ signupFormData, updateSignupForm, signup, history }) => {
  const classes = useStyles();
  
  const handleInputUserChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
        ...signupFormData,
        [name]: value,
    }
    updateSignupForm(updatedFormInfo)
};

    const handleInputGroupChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            group: {
                ...signupFormData.group,
                [name]: value
            }
        }
        updateSignupForm(updatedFormInfo)
    };

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              placehold="name"
              autoFocus
              value={signupFormData.name} 
              onChange={handleInputUserChange}
            />
              {/* <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              placehold="username"
              autoFocus
              value={signupFormData.username}
              onChange={handleInputUserChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="group"
              label="group"
              name="group_name"
              autoFocus
              value={signupFormData.group.group_name} 
              onChange={handleInputGroupChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placehold="password"
              value={signupFormData.password}
              onChange={handleInputUserChange}
            />
              {/* <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /> */}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* <input type="submit" value="Log In" /> */}
              Sign up
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
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
        signupFormData: state.signupForm
    }
}

// connect is a function that take up to 4 arguments and return a function that take a component and return the component

export default connect(mapStateToProps, { updateSignupForm , signup})(SignupUi)