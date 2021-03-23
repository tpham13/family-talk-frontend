import React from 'react';
import {updatePostForm} from '../actions/postForm.js'
import { connect } from 'react-redux'


class PostFormWithUi extends React.Component {
  constructor() {
    super();
    this.state = { 
      content: '',
    }
  }
  

  handleChange = event => {
      this.setState({
        content: event.target.value, 
      })    
  }
  render() {
    
    // const content  = this.formData
  return (
    
        <form  onSubmit={event => {
            event.preventDefault();
            // console.log('postform here');
            // Delete userId argument here b/c we don't need it here. Still  need userId in NewPostForm
            // when creating a post. Don't need userId for edit b/c we're not changing userId
            this.props.handleSubmit(this.state)
            console.log(this.state)
            }}>
          <input
            type="content" 
            onChange={this.handleChange}
            value={this.state.content}
          />
         
          <button
            type="submit"
            value={this.props.editMode ?  "UpdatePost" : "Create Post"}
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
export default connect( null, { updatePostForm })(PostFormWithUi); 