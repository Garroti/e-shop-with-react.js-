import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButtom from '../custom-butom/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SingIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
        
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={ this.state.email } 
                        handleChange={ this.handleChange }
                        label='Email'
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={ this.state.password } 
                        handleChange={ this.handleChange }
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButtom type="submit"> Sign in </CustomButtom>
                        <CustomButtom onClick={ signInWithGoogle } isGoogleSignIn> Sign in with Google </CustomButtom>
                    </div>
                </form>

            </div>
        )
    }
}

export default SingIn