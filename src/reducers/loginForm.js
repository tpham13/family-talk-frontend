const initialState = {
    username: "", 
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData
        case "RESET_LOGIN_FORM":
            return initialState
            default: 
                return state 
    }
}

// Don't forget to add this reducer to the store.js
// // Note that we return 'formData' that coming in from loginForm action