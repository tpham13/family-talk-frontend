import React from 'react';
import {updatePostForm} from '../actions/postForm.js'
import { connect } from 'react-redux'


class PostFormWithUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: '',
    }
  }
  

  handleChange = event => {
      // const {value, name } = event.target;
      this.setState({
        [event.target.name]: event.target.value
        // content: event.target.value, 
      })    
  }
  render() {
    
    const {content}  = this.state
  return (
    
        <form  onSubmit={event => {
            event.preventDefault();
           // console.log('postform here');
            // Delete userId argument here b/c we don't need it here. Still  need userId in NewPostForm
            // when creating a post. Don't need userId for edit b/c we're not changing userId
            this.props.handleSubmit(this.state)
            this.setState({content: ''})
            console.log(this.state)
            }}>
          <label htmlFor="content">What's on your mind...</label>
          <input
            name="content"
            type="text" 
            onChange={this.handleChange}
            value={content}
          />
         
          <button
            type="submit"
            value={this.props.editMode ?  "UpdatePost" : "Create Post" }
          >
            Share
          </button>
          {this.state.content}
        </form>
  )     
}
}


// mapStateToProps = state => {
//     const userId = state.currentUser ? state.currentUser.id : ""
//     return {
//         formData: state.postForm,
//         userId
        
//     }
// }
/* 2. Pass the action creator to redux's connect function
 using either mapDispatchToProps or the shorthand object syntax seen below
*/
//  dispatch is happening here, use short hand and insert {updatePostForm} to connect function
export default PostFormWithUi; 