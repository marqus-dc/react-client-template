import RestService from "../service/RestService";
import LocationService from "../service/LocationService";
import Location from "../constant/Location";
import sha1 from "sha1";
import ApiLocation from "../constant/ApiLocation";
import StoreAction from "../constant/StoreAction";

/**
 @param {function} callback - executes after fetching everything necessary for start-up
 */
export function appStartUp(callback) {
  return () => {
    RestService.getNative(ApiLocation.LOGIN)
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
    RestService.post(ApiLocation.LOGIN, {
      username: store().form.login.values.username,
      passwordHash: passwordHash
    })
    .then(() => {
      LocationService.go(Location.ROOT);
    })
  }
}

export function logout() {
  return (dispatch, store) => {
    RestService.post(ApiLocation.LOGOUT, {})
    .then(() => {
      LocationService.go(Location.LOGIN);
    })
  }
}

export function setCreateMarkDialogVisibility(visibility) {
  return (dispatch) => {
    dispatch({
      type: StoreAction.SET_CREATE_MARK_DIALOG_VISIBILITY,
      visibility: visibility
    });
  }
}
