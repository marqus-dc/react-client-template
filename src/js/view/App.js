import React from "react";
import {connect} from "react-redux";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import {AppBar} from "material-ui";

class App extends React.Component {
  render() {
    return (
        <div>
          <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
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

const mapStateToProps = state => {
  return {
    globalStore: state.globalReducer,
    store: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;