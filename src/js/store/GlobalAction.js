import configuration from "../../configuration";
import RestService from "../service/RestService";
import LocationService from "../service/LocationService";
import Location from "../constant/Location";
import sha1 from "sha1";

/**
 @param {function} callback - executes after fetching everything necessary for start-up
 */
export function appStartUp(callback) {
  return () => {
    RestService.getNative(configuration.server.loginPath)
    .then(() => {
      if (LocationService.isOnLoginPage()) {
        LocationService.go(Location.ROOT);
      }
      callback();
    })
    .catch((error) => {
      if (!LocationService.isOnLoginPage()) {
        LocationService.go(Location.LOGIN);
      }
      callback();
    })
  }
}

export function login() {
  return (dispatch, store) => {
    const passwordHash = sha1(store().form.login.values.password);
    RestService.post(configuration.server.loginPath, {
      username: store().form.login.values.username,
      passwordHash: passwordHash
    })
    .then(() => {
      LocationService.go(Location.ROOT);
    })
  }
}