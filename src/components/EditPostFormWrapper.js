import React from 'react';
import PostForm from './PostForm';
import { updatePost } from '../actions/posts';
import {setFormDataforEdit, resetPostForm} from '../actions/postForm'
import { connect } from 'react-redux';

class EditPostFormWrapper extends React.Component {

    componentDidMount() {
        this.props.post && this.props.setFormDataforEdit(this.props.post)
    }

    componentDidUpdate(prevProps) {
        this.props.post && !prevProps.post && 
        this.props.setFormDataforEdit(this.props.post)
    }
    // clear the PostForm once a form is finished updated
    componentWillUnmount() {
        this.props.resetPostForm()
    }
    
    handleSubmit = (formData, userId) => { 
        // console.log("we're in ediPostformWrapper")
        const { updatePost, post, history } = this.props
        // console.log('in new post form event is')
        updatePost({
            ...formData,
                postId: post.id,
                userId
            }, 
            history)
        }

        render() {
            const { history, handleSubmit } = this.props
            return <PostForm editMode  handleSubmit={this.handleSubmit}/>
        }
};


// we fire setFormDataforEdit when we click edit button to edit post: this will populate the existing formData with post content
export default connect(null, { updatePost, setFormDataforEdit, resetPostForm }) (EditPostFormWrapper);

