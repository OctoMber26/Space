import React,{Fragment, useEffect} from "react";
import "./Header.css";
import menu from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Aos from "aos";
import "aos/dist/aos.css";

const Header=()=>{
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])

    return(
    <Fragment>
        <header>
         <nav data-aos="fade-down" className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className="logo" src={logo} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> <img src={menu} /></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="link" to="/">00 Home</NavLink>
        <NavLink className="link" to="/destination">01 Destination</NavLink>
        <NavLink className="link" to="/crew"> 02 Crew</NavLink>
      </div>
    </div>
  </div>
</nav>
         </header>
    </Fragment>
    )
}

export default Header;