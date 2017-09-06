export default Location = {
  DEFAULT: "*",
  ROOT: "/",
  LOGIN: "/login",
  hashLocation: location => {
    return "/#" + location;
  },
}
