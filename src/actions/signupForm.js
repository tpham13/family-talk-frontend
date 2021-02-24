/* this is an action creator is a function that return an action (a function)
It receive formData as an argument
It will return a function (as a data type) 
*/
export const updateSignupForm = formData => {
    
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }