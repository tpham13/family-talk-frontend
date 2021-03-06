import React from 'react';
import PostFormWithUi from './PostFormWithUi';
import { updatePost, deletePost } from '../actions/posts';
import { setFormDataForEdit } from '../actions/postForm'
import { connect } from 'react-redux';


class EditPostFormWrapper extends React.Component {

    componentDidMount() {
        console.log("in componentDidMount, props are", this.props);
        this.props.post && this.props.setFormDataForEdit(this.props.post)
    }

    componentDidUpdate(prevProps) {
        
        this.props.post && !prevProps.post && 
        this.props.setFormDataForEdit(this.props.post)
        console.log("in componentDidUpdate, props are", prevProps)
        console.log("in componentDidUpdate posts are", this.props.post)
    }
    // clear the PostForm once a form is finished updated
    // componentWillUnmount() {
    //     // console.log("in componentWillUnmount, props are", this.props)
    //     this.props.resetPostForm()
    // }
    
    handleSubmit = (formData) => { 
        // console.log("we're in ediPostformWrapper")
        const { updatePost, post, history } = this.props
        // console.log('in new post form event is')
        updatePost({
            ...formData,
                postId: post.id,
            }, 
            history)
        }

        render() {
            const { history, deletePost, post } = this.props
            // if there's a post in props, then get post.id, otherwise null 
            const postId = post ? post.id : null
            return <>
            
            <PostFormWithUi editMode  handleSubmit={this.handleSubmit} post={post}/>
            <br/>
            <button style={{color:"red"}} onClick={() => deletePost(postId, history)}>Delete post</button>
            </>
        }
};


// we fire setFormDataforEdit when we click edit button to edit post: this will populate the existing formData with post content
export default connect(null, { updatePost, setFormDataForEdit, deletePost }) (EditPostFormWrapper);

