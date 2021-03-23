import React from 'react';
import PostFormWithUi from './PostFormWithUi';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';




const NewPostFormWrapper = ({ history, createPost }) => {
   
    // this can either be props.history or destructure it and use it like below:
    const handleSubmit = (formData, userId) => { 
        // history is a separate object here because we don't want to send history to the backend,
        // we just want the formData and userId send to the backend 
        createPost({
            ...formData,
            userId
        }, 
        // history is a router props
        history)

    }
     return <PostFormWithUi history={history} handleSubmit={handleSubmit}/>
};

// export default connect(null, { createPost })(NewPostFormWrapper);
export default connect(null, { createPost }) (NewPostFormWrapper)