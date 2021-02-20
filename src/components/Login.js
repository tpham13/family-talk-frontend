import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginForm, updateLoginForm }) => {
    
        const handleInputChange = event => {
            const { name, value } = event.target
            const updatedFormInfo = {
                ...loginForm,
                [name]: value
            }
            updateLoginForm(updatedFormInfo)
        }
    
    return (
        <form onSubmit={undefined}>
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleInputChange} />
            <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleInputChange} />
            <input type="submit" value="Log In" />
        </form>

    )
}


// mapStateToProps is saying: hey redux, we need this chunk of state from store
// Here, we need the loginForm state
// Why do we need mapStateToProps? -> To get state from the store and use them as props
// How do props get to a component?-> Props get pass into a function as an (argument) that is an object
// this gives me an argument coming to this component that looks like this: 
/*{
    username: "", 
    password: ""
}
*/
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

// connect is a function that take up to 4 arguments and return a function that take a component and return the component

export default connect(mapStateToProps, { updateLoginForm } )(Login)