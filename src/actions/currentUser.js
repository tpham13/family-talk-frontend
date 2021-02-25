import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js";
import { getPosts } from "./posts"
import { clearPosts } from "./posts"

/* setCurrentUser is a function that takes a user as an object and 
return to me a type (that match the reducer) and  key payload (user->incoming object)
*/

//  synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
};

export const clearCurrentUser = () => {
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }

// asynchronous action creators, this return a function (data structure), this function receive a dispatch 
export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getPosts())
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getPosts())
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}
// asychronous action creator, this return a function(data structure), this function receive a dispatch
export const logout = () => {
  
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearPosts())
        return fetch('http://localhost:3000/api/v1/logout', {
            // send the credentials back (THAT SEND THE COOKIES BACK) to clear
            credentials: "include",
            method: "DELETE"
        })
          
    }
}
export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/get_current_user", {
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
            dispatch(setCurrentUser(response.data))
            dispatch(getPosts())
            
          }
        })
        .catch(console.log)
    }
  }
