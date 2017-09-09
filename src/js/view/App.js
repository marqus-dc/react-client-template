import React from "react";
import {connect} from "react-redux";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact={true} path={Location.ROOT}
                     component={() => <Home/>}/>
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
