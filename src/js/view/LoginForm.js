import React from 'react';
import {Field, reduxForm} from 'redux-form';

let LoginForm = (props) => {

  const {handleSubmit} = props;

  return (
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="inputEmail" className="sr-only">Email
              address</label>
            <Field className="form-control" name="username" component="input"
                   type="text"/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <Field className="form-control" name="password" component="input"
                   type="password"/>
          </form>
          <button className="btn btn-lg btn-primary btn-block" type="submit"
                  onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </div>
  );
};

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
