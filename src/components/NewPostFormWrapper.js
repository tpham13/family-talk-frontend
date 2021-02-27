import React from 'react';
import PostForm from './PostForm';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';

const NewPostFormWrapper = ({ history, createPost }) => {
    // this can either be props.history or destructure it and use it like below:
    const handleSubmit = (event, formData, userId, history) => { 
        event.preventDefault();
        console.log('in new post form event is', event)
        createPost({
            ...formData,
            userId
        }, 
        history)

    }
     return <PostForm history={history} handleSubmit={handleSubmit}/>
};

// export default connect(null, { createPost })(NewPostFormWrapper);
export default connect(null, { createPost }) (NewPostFormWrapper)