import { resetPostForm } from './postForm'; 

export const setPosts = posts => {
    return {
        type: "SET_POSTS",
        posts
    }
}

export const clearPosts = () => {
  return {
    type: "CLEAR_POSTS"
  }
}

export const addPost = post => {
  return {
    type: "ADD_POST",
    post
  }
}

export const deletePostSuccess = postId => {
  return {
    type: "DELETE_POST",
    postId
  }
}
export const updatePostSucess = post => {
  return {
    type: "UPDATE_POST",
    post
  }
}

export const getPosts = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/posts", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setPosts(response.data))
            
          }
        })
        .catch(console.log)
    }
  }

// async action creator that return a function that return a promise
export const createPost = (postData, history) => {
  console.log(postData)

  return dispatch => {
    const sendablePostData = { 
      post: {
        content: postData.content,
        user_id: postData.userId
      },
      history
    }
    return fetch("http://localhost:3000/api/v1/posts", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePostData)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          // dispatch will add this to the redux store
          /* dispatch by invoking addPost,the action creator, by giving it the info,post, that it needs
          returning the object, "ADD_POST", that I'm dispatching, which TRIGGER or INVOKE all my reducers
          and the one that I'm going to catch on is case "ADD_POST" where I'm going to concatinate my new post
          to state, which refer to the sta te of posts
          THEN when I export default posts reducer to my store.js, I add posts which is an array
          */
          dispatch(addPost(response.data))
          dispatch(resetPostForm())
          history.push(`/posts/${response.data.id}`)
        }
      })
      .catch(console.log)
  }


}

export const updatePost = (postData, history) => {
  return dispatch => {
    const sendablePostData = { 
      post: {
        content: postData.content,
        // delete user_id: postData.userId b/c we're not changing the user id, just the post content
      }
    }
    return fetch(`http://localhost:3000/api/v1/posts/${postData.postId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePostData)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(updatePostSucess(response.data))
          // I don't need to reset form here because the React lifecycle method componentWillMount in EditPostFormWrapper
          // already took care of resetPostForm()
          history.push(`/posts/${response.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deletePost = (postId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(deletePostSuccess(postId))
          history.push(`/posts`)
        }
      })
      .catch(console.log)
  }
}