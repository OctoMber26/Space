import React,{Fragment} from "react";
import mars from "..//assets/destination/image-mars.png";
import "./Planets.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Mars=()=>{
    return(
        <Fragment>
            <div className="destination">
            <h2 className="choose">01 Pick your destination</h2>
            </div>
 <div className="planets">
             <div className="planet_image">
                 <img src={mars} />
             </div>
             <div className="destination_details">
                 <ul className="planets_list">
                     <NavLink className="link"  to="/moon"><li>Moon</li></NavLink>
                     <NavLink className="link"   to="/mars"><li>Mars</li></NavLink>
                     <NavLink className="link"   to="/europa"><li>Europa</li></NavLink>
                     <NavLink className="link"   to="/titan"><li>Titan</li></NavLink>
                 </ul>
                 <h1 className="planet_title">Mars</h1>
                 <p className="planet_detail">Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!.</p>
                 <p className="distance">distance 225 mil. km Est. travel time 9 months</p>
             </div>
         </div>
        </Fragment>
    )
}

export default Mars;