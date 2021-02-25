import React from 'react';
import {updateNewPostForm} from '../actions/newPostForm.js'
import { connect } from 'react-redux'

const NewPostForm = ({content, history}) => { 
    // 
    const handleChange = event => {
        const { name, value } = event.target
        // updateNewPostForm represent the ACTION CREATOR
        updateNewPostForm(name, value)
    }

    const handleSubmit = event => event.preventDefault();
    

    return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder="What's on your mind today..."
            name="name"
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
    const { content } = state.newPostForm
    return {
        content
    }
}

// dispatch is happening here, use short hand and insert {updateNewPostForm} to connect function
export default connect(mapStateToProps, { updateNewPostForm }) (NewPostForm);