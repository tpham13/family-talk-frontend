// synchronouse actions 

export const updatePostForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    console.log(formData)
    return {
        type: 'UPDATE_NEW_POST_FORM',
        formData
        
    }
}

export const resetPostForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    console.log(formData)
    return {
        type: 'RESET_NEW_POST_FORM'
         
        
    }
}