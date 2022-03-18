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


  console.log(images);

  const [slideSate, setSlideState] = useState(false);
  const [state_id, setState_id] = useState(0);
  

  const handlerClickSlider = (event) => {
    setSlideState(!slideSate);
  }

  return (
    <>
      <div className="container-slider">
    
      {images.map((slide, id) => 
      
      <div onClick={() => setState_id(id)} id={id} key={uuidv4()} className={state_id === id ? "slide active" : "slide"} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}>
        <h3></h3>
      </div>)}

      </div>
    </>
  );
  // `url(${slide.image})`
}

export default Slider;