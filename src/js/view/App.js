import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import {AppBar, FlatButton} from "material-ui";
import {logout} from "../store/GlobalAction";

class App extends React.Component {
  render() {
    const {logout} = this.props;
    return (
        <div>
          <AppBar title="Title"
                  showMenuIconButton={false}
                  iconElementRight={<FlatButton label="Logout" onClick={logout}/>}
          />
          <div className="container">
            <Switch>
              <Route exact={true} path={Location.ROOT} component={Home}/>
            </Switch>
          </div>
        </div>
    )
  }
}

App.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    globalStore: state.globalReducer,
    store: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
  }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;