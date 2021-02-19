/* state needs to be a default type of argument. 
The state is set to a default empty array of objects of whatever this reducer is responsible for returning 
If this is a user reducer, state will return an array of objects in it
When will this default argument use the default? -> WHEN @@INIT gets fire, it will return all the default reducer
-action is an object
*/
export default (state = [], action) => {
    switch (action.type) {
         default: 
            return state
    }
}