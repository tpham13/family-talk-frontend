export default (state = [], action) => {
    switch (action.type){
        case "SET_POSTS": 
            return action.posts
        case "ADD_POSTS": 
            return state.posts.concat(action.trips)
        case "CLEAR_POSTS":
            return []
        default:
            return state
    }
}