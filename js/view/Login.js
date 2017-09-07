import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <LoginForm handleSubmit={this.submit} />
    );
  }
}

module.exports = Login;
