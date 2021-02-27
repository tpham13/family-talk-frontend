import React from 'react';
// 1. First grab the action creator
import {updatePostForm} from '../actions/postForm.js'
import { connect } from 'react-redux'

/* 3. This means Redux gives us back a prop called updatePostForm
which when invoked, actually Redux will now dispatch
*/ 
// this is a functional component
const PostForm = ({ formData, history, updatePostForm, userId, post, handleSubmit }) => { 
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
        <div>
        <form onSubmit={event => {
            console.log('postform here');
            handleSubmit(event, formData, userId, history)
            }}>
            <input 
                placeholder="What's on your mind today..."
                name="content"
                onChange={handleChange}
                value={content}
            />
            <br/>
            <input
                type="submit"
                value="Create Post"
            />

        </form>
        </div>
    )
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
export default connect(mapStateToProps, { updatePostForm }) (PostForm); 