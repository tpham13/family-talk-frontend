const initialState = {
    content: ""
    
}

const postForm = (state = initialState, action) => {
    console.log("coming action", action)
    switch (action.type) {
        // case "UPDATE_NEW_POST_FORM":
        //     const returnVal = {
        //         ...state,
        //         [action.formData.name]: action.formData.value
        //     }
        //     // console.log("reducer")
        //     return returnVal
        // case "RESET_NEW_POST_FORM":
        //     return initialState
        case  "SET_FORM_DATA_FOR_EDIT":
            return action.postFormData
            default: 
                return state 
    }
}

export default postForm;

