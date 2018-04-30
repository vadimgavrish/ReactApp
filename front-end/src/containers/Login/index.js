import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, loginAttempt } from '../../redux/Auth/actions';
import LoginForm from '../../components/LoginForm/index';
import { loggedInSelector, errorSelector } from '../../redux/Auth/selectors';

/* eslint-disable */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.setState({ redirect: true });
    }
  }

  loginAttempt(val) {
    this.props.actions.loginAttempt(val);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: this.props.path }} />
    }

    return (
      <div className='loginPage'>
        <LoginForm 
          onSubmit={(val) => this.loginAttempt(val)} 
          hasError={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: loggedInSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login, loginAttempt }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
