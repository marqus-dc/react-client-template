const Location = {
  DEFAULT: "*",
  ROOT: "/",
  LOGIN: "/sign-in",
  hashLocation: location => {
    return "/#" + location;
  },
}

export default Location;