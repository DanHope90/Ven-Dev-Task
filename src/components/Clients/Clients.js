/* eslint-disable jsx-a11y/alt-text */
import './Clients.css';
import backgroundImage from "./background-image.svg";
import greenCircle from './green-circle-shape.svg';
import concreteBackground from "./concrete-background.svg";
import circle from "./orange-circle.svg";
import arrowRight from "./arrow-right.svg";

function Clients() { 

    return (
        <div className="client-container">
            <div className='left-img-col'>
                <img className='client-back-img1' src={backgroundImage} />
                <img className='client-overlay-img' src={greenCircle} />
            </div> 
            <div className='right-client-col'>
            <div className='right-client-img'>
                <img className='concrete-back-img' src={concreteBackground} />
                <img className='circle' src={circle} />
            </div>
            <div className="client-textbox-cont">
                <h2>Working with the best companies</h2>
                <hr style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        width: "100%"
                    }}
                    />
                    <p className='client-para'>
                    No nonsense, no silly Recruitment Sales tactics, 
                    just a Trusted Partner you can rely on. We pride ourselves  
                    on acting as a Brand Ambassador, 
                    representing you and your business to attract the 
                    best talent and get an edge on your competition.
                    </p>
                    <div className="client-link">
                    <p className='client-para-btn'>
                        Explore out Client Zone
                        </p>
                        <button 
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Clients;