import React from "react";
import PropTypes from "prop-types";
import {Field, Form, reduxForm} from "redux-form";
import {Dialog, FlatButton} from "material-ui";
import {TextField} from "redux-form-material-ui";

class CreateMarkDialog extends React.Component {

  render() {
    const {visible, setVisibility, onSubmit} = this.props;
    return (
        <Dialog title="Create new mark"
                actions={[
                  <FlatButton label="Cancel"
                              secondary={true}
                              onTouchTap={() => setVisibility(false)}/>,
                  <FlatButton label="Create"
                              primary={true}
                              onTouchTap={onSubmit}/>
                ]}
                modal={false}
                open={visible}
                onRequestClose={() => setVisibility(false)}
        >
          <Form ref="form" onSubmit={onSubmit}>
            <Field name="value" component={TextField}
                   hintText="Enter value"
                   floatingLabelText="Value"
            />
          </Form>
        </Dialog>
    )
  }
}

CreateMarkDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

CreateMarkDialog = reduxForm({
  form: 'createMarkDialog',
})(CreateMarkDialog);

export default CreateMarkDialog;