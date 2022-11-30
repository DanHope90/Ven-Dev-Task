/* eslint-disable jsx-a11y/alt-text */
import './Testimonials.css';
import savills from './savills.svg';
import groves from './thornley-grove.svg';
import fac from './fac.svg';

function Testimonials() {

    return (

        <div className='testimonials-container'>
            <h1 className='testimonial-title'>
                We’re nothing like the Recruitment Agencies out there. 
                But don’t just take our word for it…
            </h1>
            <div className="testimonials">
            <div className="company-test">
                <img className='savills-img' src={savills} />
                <h5>Property Sector</h5>
                <hr style={{
                    background: 'black',
                    color: 'orange',
                    borderColor: 'orange',  
                    }}
                    />
                <p className="quote">
                    “Blockquote Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua”
                    </p>
                    <div className="name-title">
                        <p>Mike Young</p>
                        <h5>Managing Director</h5>
                    </div>
                </div> 
                <div className="company-test">
                <img className='groves-img' src={groves} />
                <h5>Property Sector</h5>
                <hr style={{
                    background: 'black',
                    color: 'orange',
                    borderColor: 'orange',  
                    }}
                    />
                <p className="quote">
                    “Blockquote Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua”
                    </p>
                    <div className="name-title">
                        <p>Mike Young</p>
                        <h5>Managing Director</h5>
                    </div>
                </div>  
                <div className="company-test">
                <img className='fac-img' src={fac} />
                <h5>Property Sector</h5>
                <hr style={{
                    background: 'black',
                    color: 'orange',
                    borderColor: 'orange',  
                    }}
                    />
                <p className="quote">
                    “Blockquote Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua”
                    </p>
                    <div className="name-title">
                        <p>Mike Young</p>
                        <h5>Managing Director</h5>
                    </div>
                </div>    
            </div>            
        </div>
        
    )
}

export default Testimonials;