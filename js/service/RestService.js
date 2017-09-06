import axios from "axios";
import configuration from "../configuration";

class RestService {

  constructor() {
    this.axios = axios.create({
      baseURL: configuration.apiUrl,
      withCredentials: true
      // timeout: 10000,
      // headers: {'X-Custom-Header': 'foobar'}
    });
  }

  generateApiUrl(path) {
    return configuration.apiUrl + path;
  }

  getNative(path) {
    return this.axios.get(path)
  }

  get(path) {
    return this.axios.get(path)
    .then(response => {
      response = response.data;
    })
    .catch(error => console.log(error))
  }

  post(path, data) {
    return this.axios.post(path, data)
    .then(response => response = response.data)
  }

  put(path, data) {
    return this.axios.put(path, data)
    .then(response => response = response.data)
  }

  patch(path, data) {
    return this.axios.patch(path, data)
    .then(response => response = response.data)
  }

  delete(path) {
    return this.axios.delete(path)
    .then(response => response = response.data)
  }

}

export default new RestService();