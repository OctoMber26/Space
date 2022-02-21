import React, {Fragment, useEffect} from "react";
import Moon from "./Moon";
import Aos from "aos";
import "aos/dist/aos.css";

const Destination=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])

    return(
        <Fragment data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500">
            <Moon  />
        </Fragment>
    )
}

export default Destination;