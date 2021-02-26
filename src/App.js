import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import Posts from './components/Posts.js';
import Home from './components/Home.js';
import PostForm from './components/PostForm.js';
import PostCard from './components/PostCard.js';
// import MainContainer from './components/MainContainer'
import  { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, posts } = this.props
    return ( 
      
      <div className="App">
      { loggedIn ? <NavBar /> : <Home /> }
      {/* render can take a function */}
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
        {/* <Route exact path='/' render={(props) => loggedIn ? <Posts {...props}/> : <Home {...props} />}/> */}
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/posts/new' component={PostForm} />
        <Route exact path='/posts/:id' render={props => {
          const post = posts.find(post => post.id === props.match.params.id)
          console.log(post)
          return <PostCard post={post} {...props}/>
        }
        }/>
        <Route exact path='/posts/:id/:edit' render={props => {
          const post = posts.find(post => post.id === props.match.params.id)
          console.log(post)
          return <PostForm post={post} {...props}/>
        }
        }/>
      </Switch>  
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
export default connect (mapStateToProps, {getCurrentUser } ) (App);
