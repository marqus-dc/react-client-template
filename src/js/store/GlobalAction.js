import RestService from "../service/RestService";
import LocationService from "../service/LocationService";
import Location from "../constant/Location";

/**
 @param {function} callback - executes after fetching everything needed
 */
export function appStartUp(callback) {
  return () => {
    RestService.getNative("check-login")
    .then(user => {
      callback();
    })
    .catch((error) => {
      if (!LocationService.isLoggingIn()) {
        LocationService.go(Location.LOGIN);
      }
      callback();
    })
  }
}