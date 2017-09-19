import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {RaisedButton} from "material-ui";
import {TextField} from "redux-form-material-ui";

class LoginForm extends React.Component {

  componentDidMount() {
    this.ref // the Field
    .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    .focus();
  }

  saveRef = ref => (this.ref = ref)

  render() {
    const {handleSubmit} = this.props;
    return (
        <div className="login">
          <form ref="form">
            <Field name="username" component={TextField}
                   hintText="Enter your Username"
                // floatingLabelText="Username"
                   ref={this.saveRef}
                   withRef
            />
            <br/>
            <Field name="password" type="password" component={TextField}
                   hintText="Enter your Password"
                // floatingLabelText="Password"
                   ref={this.saveRef}
                   withRef
            />
            <br/>
            <RaisedButton label="Submit" primary={true}
                          onClick={(event) => {
                            handleSubmit()
                          }}/>
          </form>
        </div>
    );
  };
}

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
