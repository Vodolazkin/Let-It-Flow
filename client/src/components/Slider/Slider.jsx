import React from "react";
import "./Slider.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Slide1 from './../../img/Slide1.webp'; 
import Slide2 from "./../../img/Slide2.webp";
import Slide3 from "./../../img/Slide3.webp";
import Slide4 from "./../../img/Slide4.webp";


function Slider(props) {

  const images = [{id: 1, image: Slide1}, {id: 2, image: Slide2}, {id: 3, image: Slide3}, {id: 4,image: Slide4} ];


  const [slideSate, setSlideState] = useState(false);

  

  return (
    <>
      <div className="container-slider">
    
      {images.map((slide, id) => 
      
      <div onClick={() => setState_id(id)} id={id} key={uuidv4()} className={state_id === id ? "slide active" : "slide"} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}>
      </div>)}

      </div>
    </>
  );
}

export default Slider;
