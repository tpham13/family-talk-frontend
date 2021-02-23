import React from 'react';
import posts from '../reducers/posts';


const PostCard = ({post}) => {
    return (
        <p className="PostCard">{post.attributes.content} shared by {post.attributes.user.name}</p>
    )
}

export default PostCard