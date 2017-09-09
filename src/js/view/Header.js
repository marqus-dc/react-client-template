import React from "react";
import Location from "../constant/Location";

export default class Header extends React.Component {

  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href={Location.hashLocation(Location.ROOT)}>School</a>
        </nav>
    )
  }
}

