import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import './App.css';
import LoginUi from './components/LoginUi.js';
import SignupUi from './components/SignupUi.js';
import Posts from './components/Posts.js';
import Home from './components/Home.js';
import  { Route, Switch, withRouter } from 'react-router-dom';
import NewPostFormWrapper from './components/NewPostFormWrapper.js'
import EditPostFormWrapper from './components/EditPostFormWrapper.js'
import PostCard from './components/PostCard.js'
import Footer from './components/FooterUi.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render(){
    const { loggedIn, posts } = this.props
    return ( 
      <div className="container">
          <div className="navBar">
            { loggedIn ? <NavBar location={this.props.location} /> : <Home />}
          </div>
          <div className="sharePost">
            {loggedIn ? <NewPostFormWrapper location={this.props.location} history={this.props.history}/> : null}
          </div>
        
      {/* render can take a function */}
        <Switch>
          <>

          <div className="content">
            <div>{ loggedIn ?  <Posts location={this.props.location} /> : null}</div>
            <Route exact path='/signup' render={({history}) =><SignupUi history={history}/>}/>
            <Route exact path='/login' component={LoginUi}/>
            
            <div>
              <Route exact path='/posts/:id' render={props => {
                // need to get post objects that has all the attributes to pass down to PostCard
                const post = posts.find(post => post.id === props.match.params.id)
                // console.log(post)
                return <PostCard post={post} {...props}/>}}
            />
            </div>
            <Route exact path='/posts/:id/:edit' render={props => {
              const post = posts.find(post => post.id === props.match.params.id)
                return (
                  <p><EditPostFormWrapper post={post} {...props}/></p>
                )
              }
            }/>  
          
          </div>
            </>
        </Switch>
        
        <div className="footer"> 
            <Footer />  
        </div>
      </div>
      
    );
  }
}

/* I can do this b/c I know the incoming argument is an object, state, coming from import { connect } from 'react-redux'
and I know it has a property called currentUser
state = {..., 
  currentUser: {...}
}
*/

const mapStateToProps = state => {
  return ({
    // manipulate redux state and only grab what we need: is the user logged in or not
    loggedIn: !!state.currentUser,
    posts: state.posts
  })
}
  


// {getCurrentUser} here is using mapDispatchToProps
// export default connect (mapStateToProps, {getCurrentUser, setFormDataforEdit } ) (App);
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));