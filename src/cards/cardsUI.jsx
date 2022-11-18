import React from 'react';
import '../cards/card-style.css';

const Card=props =>{
    return(
        <div className="card shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.title}</h5>
                <i className="fa-solid fa-star" id="star"></i>
                <p className="card-text text-secondary">
                Moonfall is a 2022 science fiction disaster film co-written, directed, and produced by Roland Emmerich.
                 It stars Halle Berry, Patrick Wilson, John Bradley, Michael Peña, Charlie Plummer, Kelly Yu, and Donald
                  Sutherland. It follows two former astronauts alongside a conspiracy theorist who discover the hidden 
                  truth about Earth's moon when it suddenly leaves its orbit.
                </p>
            </div>
        </div>
    );
}

export default Card;