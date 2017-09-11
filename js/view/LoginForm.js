import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">
            Email address</label>
        <Field name="inputEmail" component="input" type="email" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <Field name="password" component="input" type="password" />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
            Sign in
        </button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

Object.defineProperty(LoginForm, 'value', {
  writable: true,
});

export default LoginForm;
