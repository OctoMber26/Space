import React,{Fragment} from "react";
import moon from "..//assets/destination/image-moon.png";
import "./Planets.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Moon=()=>{
    return(
        <Fragment>
            <div className="destination">
            <h2 className="choose">01 Pick your destination</h2>
            </div>
 <div className="planets">
             <div className="planet_image">
                 <img src={moon} />
             </div>
             <div className="destination_details">
                 <ul className="planets_list">
                     <NavLink className="link"  to="/moon"><li>Moon</li></NavLink>
                     <NavLink className="link"   to="/mars"><li>Mars</li></NavLink>
                     <NavLink className="link"   to="/europa"><li>Europa</li></NavLink>
                     <NavLink className="link"  to="/titan"><li>Titan</li></NavLink>
                 </ul>
                 <h1 className="planet_title">Moon</h1>
                 <p className="planet_detail">Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                 <p className="distance">384,400 km Est. travel time 3 days</p>
             </div>
         </div>
        </Fragment>
    )
}

export default Moon;