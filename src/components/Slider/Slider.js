import './Slider.css';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import arrowRight from "./arrow-right.svg"

function Slider(props) {

    const sliderClick = (slider) => {
        alert('Hello World')
    }

    const jobSlides = [
        {title:'Electrical Conductor Researcher', salary: 'Negotiable', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£31,000 + uncapped commission', 
        type: 'Self-Employed', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£42,000 OTE', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£31,000 - £43,000', 
        type: 'Employed', clickEvent:sliderClick },
        {title:'Electrical Conductor Researcher', salary: 'Negotiable', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£31,000 + uncapped commission', 
        type: 'Self-Employed', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£42,000 OTE', clickEvent:sliderClick},
        {title:'Electrical Conductor Researcher', salary: '£31,000 - £43,000', 
        type: 'Employed', clickEvent:sliderClick }
    ];

   

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500; 
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500; 
    }


    return (
        <div className="main-slider-container" >
             
            <div id='slider'> 
               {jobSlides.map((slide, index)=>{
                   return(
                       <div className='slider-card' key={index} onClick={() => slide.clickEvent()}>
                            <h5 className='title'>{slide.title}</h5>
                <hr style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',  
                    }}
                    />

                     <h6 className='salary'>{slide.salary}</h6>
                     <h6 className='type'>{slide.type}</h6>
                     <div className='job-container'>
                <p className="job-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                    <p className="job-description">
                     Aliquam gravida odio at semper semper. 
                        </p>
                        <p className="job-description">
                                In sagittis felis non pharetra dapibus…
                            </p>
    
                    </div>
                    <div className="view-job">
                        <p style={{
                            fontSize: '12px',
                            fontFamily: 'Montserrat'
                        }}>View Job</p>
                        <img className="arrow-sbmt-slider" src={arrowRight} />
                            
                    </div>
                    </div>
                   )
               })}
            </div>
            <div className='slider-icon'>
                <BsArrowLeft size={40} className='slider-icon-left' onClick={slideRight} />
                <BsArrowRight size={40} className='slider-icon-right' onClick={slideLeft} />
            </div>
            </div>
       
    )
}

export default Slider;