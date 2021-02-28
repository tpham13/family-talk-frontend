export default (state = [], action) => {
    switch (action.type){
        case "SET_POSTS": 
            return action.posts
        case "ADD_POST": 
            return state.concat(action.post)
        case "CLEAR_POSTS":
            return []
        case "UPDATE_POST":
            return state.map(post => post.id === action.post.id ? action.post : post)
        default:
            return state
    }
}