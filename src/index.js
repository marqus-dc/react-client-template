import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./js/store/ConfigureStore";
import {appStartUp} from "./js/store/GlobalAction";
import Location from "./js/constant/Location";
import App from "./js/view/App";
import Login from "./js/view/Login";
import Home from "./js/view/Home";
import 'sha1/sha1';
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import "./css/bootstrap-custom.css";
import "./css/style.css";
window.jQuery = $;
window.Popper = Popper;
require("bootstrap/dist/js/bootstrap.min.js");

const store = configureStore();
window.store = store;

const rootRoute = (
    <Switch>
      <Route path={Location.LOGIN} component={Login}/>
      <Route path={Location.ROOT} component={App}/>
      <Route path={Location.DEFAULT} component={Home}/>
    </Switch>
);

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <HashRouter onUpdate={console.log("Changing route")}>
          {rootRoute}
        </HashRouter>
      </Provider>,
      document.getElementById('root')
  );
}

console.log('App Start Up');
store.dispatch(appStartUp(render));