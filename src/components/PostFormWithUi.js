import React from 'react';

class PostFormWithUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: this.props.post ? this.props.post.attributes.content: '',
      id: this.props.post ? this.props.post.id: ''
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
            this.setState({content: '', id: ''})
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

/* 2. Pass the action creator to redux's connect function
 using either mapDispatchToProps or the shorthand object syntax seen below
*/
//  dispatch is happening here, use short hand and insert {updatePostForm} to connect function
export default PostFormWithUi; 























// import React from 'react';
// import { connect } from 'react-redux'
// import { createPost, updatePost } from '../actions/posts';


// class PostFormWithUi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       content: this.props.post ? this.props.post.content: "",
//       id: this.props.post ? this.props.post.id: ""
//     }
//   }
  

//     handleChange = event => {
//         this.setState({
//           // event.target.name is in bracket and act as a key
//           [event.target.name]: event.target.value
//        })    
//     };

//     handleSubmit(event) { 
//       event.preventDefault(); 
//       if(!this.props.post){
//         this.props.createPost(this.state)
//       } else  {
//         this.props.updatePost(this.state)
//         console.log(this.state )
//       }
//       this.setState({content: "", id: ""})
//       // this.props.history.push('/posts')
    
//     }

//     postForm = () => {
     
//       return (
    
//         <form  onSubmit={this.handleSubmit.bind(this)}>
//           <label htmlFor="content">What's on your mind...</label>
//           <input
//             name="content"
//             type="text" 
//             onChange={(event) => this.handleChange(event)}
//             value= {this.state.content}  
//           />
         
//           <button
//             type="submit"
//             // value={this.props.editMode ?  "UpdatePost" : "Create Post" }
//           >
//             Share
//           </button>
//         </form>
//   ) 
//     }
  
//   render() {
    
//   return (
//     <>
//     {this.postForm()}
//     </>
//   )     
// }
// }



// /* 2. Pass the action creator to redux's connect function
//  using either mapDispatchToProps or the shorthand object syntax seen below
// */
// //  dispatch is happening here, use short hand and insert {updatePostForm} to connect function
// export default connect(null, {createPost, updatePost}) (PostFormWithUi); 