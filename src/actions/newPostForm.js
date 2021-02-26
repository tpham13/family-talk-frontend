// synchronouse actions 

export const updateNewPostForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    console.log(formData)
    return {
        type: 'UPDATE_NEW_POST_FORM',
        formData
        
    }
}

export const resetNewPostForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    console.log(formData)
    return {
        type: 'RESET_NEW_POST_FORM'
         
        
    }
}