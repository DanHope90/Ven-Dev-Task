/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../Home/Home.css';
import logo from "./venn-logo.svg";
import menu from "./menu-icons.svg";
import contacts from "./contacts.svg";
import HomeImage from "./riccardo-oliva-C5DLhUkEWfM-unsplash.svg";
import SearchButton from "./magnifying-glass.svg";
import line from "./orange-line.svg";

function WeListen_1() {

    return (
        <div className="home-container" >
            <div className="home-wrap">
            </div>
            <div className="navbar">
               <img className="menu-icons" src={menu} alt="menu-icons" />
               <img className="contact-numbers" src={contacts} alt="contact-numbers" />
            </div>
                
            <div className="image-container" >
                <img className="image" src={HomeImage} alt="home" />
            </div>
            <div className="intro-container">
            <img className="orange-line" src={line} />
                <h1 className="heading">We Listen.</h1>
                <p className="home-para">People-focused recruitment working 
                    with some of the best companies in 
                    Financial Services and Property
                    </p>
                    <form className="input-search" >
                    <div className="input-container" >
                        <input
                        className="input-text" 
                        type="text"
                        placeholder=". Search for your new role"/>
                    
                    <button
                    className="submit-btn"
                    type="submit"
                    >
                     {<img className='search' src={SearchButton} />}
                    </button>
                    </div>
                </form>
            </div>
                
            <div className="green-col-cont">
                <img className="logo" src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default WeListen_1;