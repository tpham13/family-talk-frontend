import React from 'react';
// 1. First grab the aciton creator
import {updateNewPostForm} from '../actions/newPostForm.js'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts.js'

/* 3. This means Redux gives us back a prop called updateNewPostForm
which when invoked, actually Redux will now dispatch
*/ 
const NewPostForm = ({formData, updateNewPostForm, createPost, userId}) => { 
    const { content } = formData
    const handleChange = event => {
        console.log("trigger handleChange")
        const { name, value } = event.target
        /* 4. This is not an invocation of just the action creator,
         it's not Redux dispatching the action built by the actions creator
         with the appropriate arguments
         */ 
        // updateNewPostForm represent the ACTION CREATOR
        
        updateNewPostForm(name, value)
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        createPost({
            ...formData,
            userId
        })

    }
    

    return (
    <form onSubmit={handleSubmit}>
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
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newPostForm,
        userId
    }
}
/* 2. Pass the action creator to redux's connect function
 using either mapDispatchToProps or the shorthand object syntax seen below
*/
//  dispatch is happening here, use short hand and insert {updateNewPostForm} to connect function
export default connect(mapStateToProps, { updateNewPostForm, createPost }) (NewPostForm); 