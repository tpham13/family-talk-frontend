/* setCurrentUser is a function that takes a user as an object and 
return to me a type (that match the reducer) and  key payload (user->incoming object)
*/

//  synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// asynchronous action creators, this return a function, this function receive a dispatch 
export const login = credentials => {
    // console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(credentials)
        })
        // what tool do we need to dispatch?
            .then(r => r.json())
            .then( user => {
                if (user.error) {
                    alert(user.error)
                }else{
                    // note* that dispatch is a function from redux that comes in as an argument
                    // setCurrentUser is an action
                    dispatch(setCurrentUser(user))
                }
            }
                
            )
            .catch(console.log)
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
          }
        })
        .catch(console.log)
    }
  }
