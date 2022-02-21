import React,{Fragment} from "react";
import titan from "..//assets/destination/image-titan.png";
import "./Planets.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Titan=()=>{
    return(
        <Fragment>
            <div className="destination">
            <h2 className="choose">01 Pick your destination</h2>
            </div>
 <div className="planets">
             <div className="planet_image">
                 <img src={titan} />
             </div>
             <div className="destination_details">
                 <ul className="planets_list">
                     <NavLink className="link"  to="/moon"><li>Moon</li></NavLink>
                     <NavLink className="link"  to="/mars"><li>Mars</li></NavLink>
                     <NavLink className="link"   to="/europa"><li>Europa</li></NavLink>
                     <NavLink className="link"   to="/titan"><li>Titan</li></NavLink>
                 </ul>
                 <h1 className="planet_title">Titan</h1>
                 <p className="planet_detail">Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                 <p className="distance">distance 1.6 bil. km Est. travel time 7 years</p>
             </div>
         </div>
        </Fragment>
    )
}

export default Titan;