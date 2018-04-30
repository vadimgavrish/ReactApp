/* eslint-disable */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './styles.css';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field 
              name="username"
              component="input"
              type="text"
              placeholder="Username"
              className="userField"
            />
          </div>
        </div>
        <div>
          <div>
            <Field 
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              className="passField"
            />
          </div>
        </div>
        { props.hasError &&
          <div className='loginError'>
            Invalid Username / Password
          </div>
        }
        <div className='link'>
          <p>Forgot password?</p>
        </div>
        <div>
          <button 
            type='submit'
            className='loginButton'
          >
            Login
          </button>
        </div>
        <div className='link'>
          <p>Need an account? Register here</p>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
