// synchronouse actions 

export const updateNewPostForm = (name, value) => {
    console.log("ActionFired!")
    return {
        type: 'UPDATE_NEW_POST_FORM',
        formData: { name, value } 
        
    }
}