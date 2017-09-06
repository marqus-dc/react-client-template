import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import "babel-polyfill";
import configureStore from "./store/ConfigureStore";
import {appStartUp} from "./store/GlobalAction";
import Location from "./constant/Location";
import App from "./view/App";
import Login from "./view/Login";
import Home from "./view/Home";
import 'sha1/sha1';
import 'popper.js';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import "../css/bootstrap-custom.less";
import "../css/style.less";

const store = configureStore();
window.store = store;

const rootRoute = (
    <Switch>
      <Route path={Location.LOGIN} component={() => <Login/>}/>
      <Route path={Location.ROOT} component={() => <App/>}/>
      <Route path={Location.DEFAULT} component={Home}/>
    </Switch>
);

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          {rootRoute}
        </HashRouter>
      </Provider>,
      document.getElementById('app')
  );
}

console.log('App Start Up');
store.dispatch(appStartUp(render));