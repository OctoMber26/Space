import React, {Fragment} from "react";
import crew from ".//crewData";
import CrewList from "./CrewList";
import "./Crew.css";

const Crew=() =>{
    return(
        <Fragment>
         <div className="crew">
         <h1 className="pick">02 Pick your crew</h1>
         
                    <CrewList />
                    
         </div>
        </Fragment>
    )
}

export default Crew;