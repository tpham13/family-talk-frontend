const initialState = {
    content: ""
    
}

export default (state = initialState, action) => {
    console.log("coming action", action)
    switch (action.type) {
        case "UPDATE_NEW_POST_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            console.log("reducer")
            return returnVal
        case "RESET_NEW_POST_FORM":
            return initialState
            default: 
                return state 
    }
}

