import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap";
import pers_1 from "../assets/crew/image-anousheh-ansari.png";
import pers_2 from "../assets/crew/image-douglas-hurley.png";
import pers_3 from "../assets/crew/image-victor-glover.png";
import "./CrewList.css";

const CrewList=(props)=>{
    return(
        <Fragment>
          <div className="carousel">
    <Carousel>
  <Carousel.Item>
    <img className="crew"
      src={pers_1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="crew_mebmer"> Commander Douglas Hurley Douglas</h3>
      <p className="crew_about">Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="crew"
      src={pers_2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="crew_mebmer">Mission Specialist Mark Shuttleworth </h3>
      <p className="crew_about">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="crew"
      src={pers_3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="crew_mebmer"> Pilot Victor Glover</h3>
      <p className="crew_about">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </Fragment>
    )
}

export default CrewList;