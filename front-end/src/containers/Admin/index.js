import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/Auth/actions';

/* eslint-disable */
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      info: []
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(info => this.setState({ info }));
  }

  clickHandler() {
    this.props.actions.logout();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{pathname: '/login'}}/>
    }
    
    const userInfo = this.state.info.map((info, index) => {
      return <div key={index}>
        [ {info.UserID} ] {info.UserName} {info.Email}
      </div>
    })

    return (
      <div>
        Admin Page
        {userInfo}
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

export default connect(null, mapDispatchToProps)(Admin);
