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