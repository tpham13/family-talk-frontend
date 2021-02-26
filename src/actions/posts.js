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