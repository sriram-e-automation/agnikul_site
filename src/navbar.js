import React from "react";
import { NavLink } from "react-router-dom";

import navBar from "./js/common";
import log from "./images/logo.png";
import shopIcon from "./images/products/shop.svg";

function NavbarComponent() {
  return (
    <div className="navBar">
      <div
        className="topnav row justify-content-around align-items-baseline"
        id="myTopnav"
      >
        <div className="column-lg nav-brandc">
          <NavLink to="/">
            <img className="logo" src={log} />
          </NavLink>
        </div>
        <div className="column-sm">
          <NavLink
            to="/about"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            About
          </NavLink>
        </div>
        <div className="column-md">
          <NavLink
            to="/tech"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            Engineering
          </NavLink>
        </div>
        <div className="column">
          <NavLink
            to="/agnibaan"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            Agnibaan
          </NavLink>
        </div>
        <div className="column">
          <NavLink
            to="/SorTeD"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            SorTeD
          </NavLink>
        </div>
        <div className="column-sm">
          <NavLink
            to="/team"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            Team
          </NavLink>
        </div>
        <div className="column-sm">
          <NavLink
            to="/news"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            News
          </NavLink>
        </div>
        <div className="column">
          <NavLink
            to="/career"
            className="nav-itemc nav-linkc"
            activeClassName="active"
          >
            Careers
          </NavLink>
        </div>
        <div id="navButtonDiv" style={{width:"14%"}} className="column-lg">
          <a href="https://shop.agnikul.in/" target="_blank">
            <button className="nav-itemc nav-buttond">
              {" "}
              <img src={shopIcon} alt="" style={{height:"23px", padding:"0px 5px 5px 0px"}}/>
              COSMOS STORE
            </button>
          </a>
        </div>
        <div id="navButtonDiv" className="column-lg">
          <NavLink to="/book">
            <button className="nav-itemc nav-buttonc">BOOK A LAUNCH</button>
          </NavLink>
        </div>
      </div>
      <div className="iconc">
        <div onClick={navBar}>
          <i className="fa fa-bars fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
