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
export const createPost = postData => {
  return dispatch => {
    const sendablePostData = { 
      post: {
        content: postData.content,
        user_id: postData.userId
      }
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
      .then(console.log)
      .catch(console.log)
  }
}