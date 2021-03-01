// synchronouse actions 

export const updatePostForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    // console.log(formData)
    return {
        type: 'UPDATE_NEW_POST_FORM',
        formData
        
    }
}

export const resetPostForm = () => {
    // console.log(name, value)
    // console.log(formData)
    return {
        type: 'RESET_NEW_POST_FORM',
        
    }
}

/*
As setFormDataforEdit take in post as an argument. As long as I have the post object coming from my state, 
I'll pickup that tripFormData that I need and pick up that data and update it all at once
*/
export const setFormDataForEdit = post => {
    const postFormData = {
        content: post.attributes.content
    }
    return {
        type: 'SET_FORM_DATA_FOR_EDIT',
        postFormData
    }
}