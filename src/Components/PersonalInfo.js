import React from 'react';
import about from '../img/elias.jpeg';
import Typewriter from 'typewriter-effect'
function PersonalInfo() {
    return (
        <div className="PersonalContainer">
           
            <div className="ImgContent">
            <img src={about} alt="about"/>
            </div>
            <div className="InfoContent">

             <span style={{display: "flex"}}>

              <Typewriter 
               options ={{
                   autoStart: true,
                   loop: true,
                   delay: 50,
                   strings: [
                       "I'm Elias T"
                   ]
               }}
              />
             
             </span>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="btn">Download CV</button>
             </div>

        </div>
    )
}

export default PersonalInfo;
