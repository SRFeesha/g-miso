import React from "react";
// import logo from '../img/logo.svg'
import navStyle from "./Navbar.module.css";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className={navStyle.link} to="/blog">
                Blog   
              </Link>
              <Link className={navStyle.link} to="/">
                Home              
              </Link>
            </div>
        </div>
        {/* <div className={navStyle.container}>
          <span className={navStyle.bigText}>Miso</span>
        </div> */}
      </nav>
    );
  }
};

export default Navbar;
