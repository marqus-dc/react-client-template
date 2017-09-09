const Location = {
  DEFAULT: "*",
  ROOT: "/",
  LOGIN: "/login",
  hashLocation: location => {
    return "/#" + location;
  },
}

export default Location;