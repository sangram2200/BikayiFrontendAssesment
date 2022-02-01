import React, { Component } from "react";
import { ReactComponent as Logo } from "./nobelLogo.svg";

//navigation bar styles
import "./NavBar.css";

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            Nobel Winners
            <i className="fab fa-react">
              <Logo />
            </i>
          </h1>
        </nav>
      </>
    );
  }
}

export default NavBar;
