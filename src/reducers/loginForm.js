const initialState = {
    username: "", 
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.user
            default: 
                return state 
    }
}

// Don't forget to add this reducer to the store.js