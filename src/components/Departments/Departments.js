/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Departments.css';
import finance from './finance-image.svg';
import property from './property-image.svg';
import phone from './phone-flip-solid.svg'

function Departments() {

    return(
        
        <div className="dep-container">
            
             <div className="finance-container">
             <h1>Experts in our Industries</h1>
                <img className="dep-img" src={finance} />
                <div className="dep-into-cont">
                    <h2 className="dep-title">Financial Services</h2>
                    
                    <p className="dep-into-para">
                        Paragragh Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Aliquam gravida odio at semper semper. 
                        In sagittis felis non pharetra dapibus. 
                        Maecenas in laoreet justo, at maximus nibh. 
                        </p>
                    <div className="call-team"> 
                        <p className="call-team-para">
                            Call our Financial Team
                            </p>
                        <button 
                            className="call-btn"
                            type='button'
                            >
                             {<img className="phone-sbmt" src={phone} />}  
                            </button>
                    </div>
                    <div className="list-grid">
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 1
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 2
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 3
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 4
                            </p>
                    </div>
                    
                </div>
                
                </div>
            </div>
            <div className="space" />
            <div className="property-container" >
                <img className="dep-img" src={property} />
                <div className="dep-into-cont">
                <h2 className="dep-title">
                    Property Services
                    </h2>
                <p className="dep-into-para">
                    Paragragh Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Aliquam gravida odio at semper semper. 
                    In sagittis felis non pharetra dapibus. 
                    Maecenas in laoreet justo, at maximus nibh. 
                </p>
                <div className="call-team"> 
                        <p className="call-team-para">
                            Call our Property Team
                            </p>
                        <button 
                            className="call-btn"
                            type='button'
                            >
                             {<img className="phone-sbmt" src={phone} />}  
                            </button>
                    </div>
                <div className="list-grid">
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 1
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 2
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 3
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 4
                            </p>
                    </div>
                    <div className="list-row">
                        <p className="sub-para">
                            Sub-Specialism 5
                            </p>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Departments;