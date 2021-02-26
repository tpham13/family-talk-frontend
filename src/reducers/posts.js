export default (state = [], action) => {
    switch (action.type){
        case "SET_POSTS": 
            return action.posts
        case "ADD_POSTS": 
            return state.concat(action.trip)
        case "CLEAR_POSTS":
            return []
        default:
            return state
    }
}