/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AboutCompany.css";
import WallImage from "./wall-image.svg";
import arrowRight from './arrow-right.svg';


function AboutCompany() {

    return(
        <div className="about-container" >
            <div className="text-col-cont" >
                <div className="about-company">
                    <h2 style={{
                         fontSize: '38px',
                    }}>Transparent Recruitment</h2>
                    <hr style={{
                        background: 'white',
                        color: 'white',
                        borderColor: 'white',
                        width: "100%"
                    }}
                    />
                    <p className="about-para">
                    Using the latest recruitment technology and talent attraction methods,
                     we build long-lasting relationships with our clients and candidates to deliver a fully bespoke recruitment service. 
                     Come and see why so many companies and candidates Trust Integro Partners.
                    </p>
                    <div className="about-us">
                        <p className="about-us-text">
                            About us
                            </p>
                        <button 
                            className="about-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button>
                
                    </div>
                </div>
            </div>
            <div className="wall-image-cont">
                <img className="wall-image" src={WallImage} alt="wall"/>
            </div>
        </div>
        
    )
}

export default AboutCompany;