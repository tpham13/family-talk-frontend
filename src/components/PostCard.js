import React from 'react';
import {Link} from 'react-router-dom'


// PostCard is expect post as a props so we need to pass post as a props in App.js route
const PostCard = ({post}) => {

    return (
        post ?
        <div className="PostCard" >
            <ul>{post.attributes.content} shared by {post.attributes.user.name}</ul>
            <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
            {/* <button className="edit">Edit</button> */}
        </div> :

       <p>THis is the post card</p>
    )
}

export default PostCard