const posts = (state = [], action) => {
    switch (action.type){
        case "SET_POSTS": 
            return action.posts
        case "ADD_POST": 
            return state.concat(action.post)
        case "CLEAR_POSTS":
            return []
        case "UPDATE_POST":
            return state.map(post => post.id === action.post.id ? action.post : post)
        // DELETE_POST only fire if post is delete  successful
        case "DELETE_POST":
            console.log("action.postId is", action.postId)
            return state.filter(post => post.id === action.postId ? false : true)
        default:
            return state
    }
}
export default posts; 