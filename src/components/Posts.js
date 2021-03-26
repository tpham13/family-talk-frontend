import React from 'react';
import PostCard from './PostCard.js'
// step 1: grab that post array
import { connect } from 'react-redux';


// Posts is expected to render a bunch of posts

const Posts = props => {
     
    const postCards = props.posts.length > 0 ?
        props.posts.map(p => (<div key={p.id}><PostCard post={p} /></div>)) : null
    return (
        
         postCards
         
    )
}

/* step 2: mapStateToProps take in state of the store, return an object data type 
 we provide mapStateToProps to Redux in order to tell Redux: "hey Redux, please provide use access to your state
so that we may pick and choose the pieces of state we would like available to this particular component as props..."
*/ 
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

/* connect function returned from invoking connect that now will supply Posts with 
 props including State as described in MapStateToProps and actions as described in mapStateToProps
 The return value is a connected Posts Component
 */
export default  connect(mapStateToProps)(Posts);