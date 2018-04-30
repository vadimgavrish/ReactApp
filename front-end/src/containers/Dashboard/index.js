import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/Auth/actions';

/* eslint-disable */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  clickHandler() {
    this.props.actions.logout();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect){
      return <Redirect to={{pathname: '/login'}}/>
    }

    return (
      <div>
        Dashboard Page
        <div onClick={() => this.clickHandler()} >
          <strong>Logout</strong>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout }, dispatch),
})

export default connect(null, mapDispatchToProps)(Dashboard);
