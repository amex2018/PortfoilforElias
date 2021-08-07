import React from 'react';

function ServicesSection({image, title, text}) {
    return (
          
            <div className="ServiceContent">
               <img  src={image} alt="img" />
               <div className="ServicesContent">
                 <h2>{title}</h2>
                 <p>{text}</p>
               </div>
               
            </div>
         
    )
}

export default ServicesSection;
