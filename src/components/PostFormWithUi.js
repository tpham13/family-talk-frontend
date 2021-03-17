import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {updatePostForm} from '../actions/postForm.js'
import { connect } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PostFormWithUi = ({ formData, updatePostForm, userId, post, handleSubmit, editMode }) => {
  const classes = useStyles();
  const { content } = formData
  const handleChange = event => {
      // console.log("trigger handleChange")
      const { name, value } = event.target
      /* 4. This is not an invocation of just the action creator,
       it's not Redux dispatching the action built by the actions creator
       with the appropriate arguments
       */ 
      // updatePostForm represent the ACTION CREATOR
      
      updatePostForm(name, value)
      
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          What's on your mind today... 
        </Typography>
        <form className={classes.form} noValidate onSubmit={event => {
            event.preventDefault();
            // console.log('postform here');
            // we delete userId argument here b/c we don't need it here. I still  need userId in NewPostForm
            // when creating a post. We don't need userId for edit b/c we're not changing userId
            handleSubmit(formData)
            }}>
          <TextField
            variant="outlined"
            margin="normal"
            // multiline= "true"
            fullWidth
            label="share with the fam..."
            name="content"
            autoFocus
            onChange={handleChange}
            value={content}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value={editMode ?  "UpdatePost" : "Create Post"}
          >
            Share
          </Button>
          
        </form>
      </div>
     
    </Container>
  );
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.postForm,
        userId
        
    }
}
/* 2. Pass the action creator to redux's connect function
 using either mapDispatchToProps or the shorthand object syntax seen below
*/
//  dispatch is happening here, use short hand and insert {updatePostForm} to connect function
export default connect(mapStateToProps, { updatePostForm }) (PostFormWithUi); 