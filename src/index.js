import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from "./js/store/ConfigureStore";
import {appStartUp} from "./js/store/GlobalAction";
import {MuiThemeProvider} from "material-ui";
import Location from "./js/constant/Location";
import App from "./js/view/App";
import Login from "./js/view/Login";
import Home from "./js/view/Home";
import 'sha1/sha1';
import "font-awesome/css/font-awesome.min.css"
import "./css/style.css";

const store = configureStore();
window.store = store;

injectTapEventPlugin();

const rootRoute = (
    <Switch>
      <Route path={Location.LOGIN} component={Login}/>
      <Route path={Location.ROOT} component={App}/>
      <Route path={Location.DEFAULT} component={Home}/>
    </Switch>
);

const render = () => {
  ReactDOM.render(
      <MuiThemeProvider>
        <Provider store={store}>
          <HashRouter onUpdate={console.log("Changing route")}>
            {rootRoute}
          </HashRouter>
        </Provider>
      </MuiThemeProvider>,
      document.getElementById('root')
  );
}

console.log('App Start Up');
store.dispatch(appStartUp(render));