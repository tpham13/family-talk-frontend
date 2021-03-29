// step 1: grab that post array
import { connect } from 'react-redux';
import CommentCard from './CommentCard';

// Posts is expected to render a bunch of posts

const Comments = props => {
     
    
    return (
        <>
         <CommentCard />
         <h3>in Comment</h3>
         
        </>
         
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

/* connect function returned from invoking connect that now will supply Posts with 
 props including State as described in MapStateToProps and actions as described in mapStateToProps
 The return value is a connected Posts Component
 */
export default  connect(mapStateToProps)(Comments);