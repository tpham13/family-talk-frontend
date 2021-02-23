/* this is an action creator is a function that return an action (a function)
It receive formData as an argument
It will return a function (as a data type) 
*/
export const updateLoginForm = formData => {
    
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

export const resetLoginForm = () => {
    return {
      type: "RESET_LOGIN_FORM"
    }
  }