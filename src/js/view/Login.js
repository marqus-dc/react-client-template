import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login} from "../store/GlobalAction";
import LoginForm from './LoginForm';

class Login extends React.Component {
  componentDidMount() {
    // this.ref.getRenderedComponent().blur();
    // this.ref.getRenderedComponent().focus();
  }

  saveRef = ref => (this.ref = ref)

  render() {
    const {handleLogin} = this.props;
    return (
        <LoginForm onSubmit={handleLogin}/>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => {
      dispatch(login());
    },
  }
};

Login = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default Login;