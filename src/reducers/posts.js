export default (state = [], action) => {
    switch (action.type){
        case "SET_POSTS": 
            return action.posts
        case "CLEAR_POSTS":
            return []
        default:
            return state
    }
}