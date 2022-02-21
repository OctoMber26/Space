import React, {Fragment} from "react";
import "./Home.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Home=() =>{
    return(
        <Fragment>
         <div className="explore">
             <div data-aos="fade-right" className="about">
             <p className="question">So, you want to travel to</p>
             <h1 className="space">Space</h1>
             <p className="description"> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
             </div>
             <div data-aos="flip-up" className="start">
               <NavLink className="explore_link" to="/destination"><span className="as">Explore</span></NavLink>
               </div>
         </div>
        </Fragment>
    )
}

export default Home;