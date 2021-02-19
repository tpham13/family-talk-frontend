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
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({username: "thanhp", password: "1234"})
        })
    }
}
