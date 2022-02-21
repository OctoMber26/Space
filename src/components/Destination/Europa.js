import React,{Fragment} from "react";
import eur from "..//assets/destination/image-europa.png";
import "./Planets.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Europa=()=>{
    return(
        <Fragment>
            <div className="destination">
            <h2 className="choose">01 Pick your destination</h2>
            </div>
 <div className="planets">
             <div className="planet_image">
                 <img src={eur} />
             </div>
             <div className="destination_details">
                 <ul className="planets_list">
                     <NavLink className="link"  to="/moon"><li>Moon</li></NavLink>
                     <NavLink className="link"  to="/mars"><li>Mars</li></NavLink>
                     <NavLink className="link"  to="/europa"><li>Europa</li></NavLink>
                     <NavLink className="link"   to="/titan"><li>Titan</li></NavLink>
                 </ul>
                 <h1 className="planet_title">Europa</h1>
                 <p className="planet_detail"> Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                 <p className="distance">distance 628 mil. km Est. travel time 3 years</p>
             </div>
         </div>
        </Fragment>
    )
}

export default Europa;