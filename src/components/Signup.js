import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    
    const handleInputUserChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value,
        }
        updateSignupForm(updatedFormInfo)
    };

    const handleInputGroupChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            group: {
                ...signupFormData.group,
                [name]: value
            }
        }
        updateSignupForm(updatedFormInfo)
    };

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    // have to include a dropdown to choose a group that user will belong to here: 
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputUserChange} />
            <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputUserChange} />
            <input placeholder="group" value={signupFormData.group.group_name} name="group_name" type="text" onChange={handleInputGroupChange} />
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputUserChange} />
            <button type="submit"> submit </button>
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
        signupFormData: state.signupForm,
    }
}

// connect is a function that take up to 4 arguments and return a function that take a component and return the component

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)