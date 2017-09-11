import configuration from "../../configuration";
import Location from "../constant/Location";

class LocationService {

  go(path) {
    console.log("LocationService go: " + path);
    if (!path) {
      window.location.hash = "";
    } else {
      window.location.hash = path;
    }
  }

  get() {
    var hashPath = window.location.hash;
    return hashPath.substring(1);
  }

  isOnLoginPage() {
    var path = this.get();
    if (path.startsWith(Location.LOGIN)) {
      return true;
    } else {
      return false;
    }
  }


  getResourcePath(resourcePath) {
    return configuration.relativePath + resourcePath;
  }

  getResourceUrl(resourcePath) {
    return "url(" + configuration.relativePath + resourcePath + ")";
  }

}

export default new LocationService();