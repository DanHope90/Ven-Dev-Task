/* eslint-disable jsx-a11y/alt-text */
import './Insights.css';
import shade from './shade.svg'
import insights1 from './background-1.svg';
import insights2 from './insights2.svg';
import insights3 from './insights3.svg'
import arrowRight from './arrow-right.svg';

function Insights() {

    return (
        <div className='insights-container'>
            <div className='insights-border'>
            <div className='insights-title'>
                <h2>Latest Insights</h2>
                <div className="allRecources-link">
                    <p style={{
                        paddingRight: '7px',
                        fontSize: "14px"
                    }}>All Resources</p>
                    <button 
                    style={{
                        background: 'none'
                    }}
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button>  
            </div>
            </div>
            <hr style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    width: '80%'  
                    }}
                    />
            <div className='insights-articles-cont'>
                    <div className='insights-content'>
                    <img className="insights-background" src={insights1} />
                    <img className="insights-shade" src={shade} />
                    <div className='text-cont'>
                    <h6 style={{
                        color:'orange'
                        }}>
                            20th June
                            </h6>
                    <h3 style={{
                        color:'white',
                        fontSize: '17px'
                        }}>
                            Want to become a self-employed Mortgage Broker?
                            </h3>
                    <p style={{
                        width: '220px',
                        color: 'white',
                        fontSize: '18px'
                        }}>
                        Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam gravida odio at semper semper…
                        </p>
                        <div className="allRecources-link">
                    <p style={{
                        color:'white',
                        fontSize: '14px',
                        paddingRight: '10px'
                        }}>
                            Read More
                            </p>
                     <button 
                            style={{
                            background: 'none'
                         }}
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button> 
                    </div>
                    </div>
                          
                </div>
                <div className='insights-content'>
                    <img className="insights-background" src={insights2} />
                    <img className="insights-shade" src={shade} />
                    <div className='text-cont'>
                    <h6 style={{
                        color:'orange'
                        }}>
                            20th June
                            </h6>
                    <h3 style={{
                        color:'white',
                        fontSize: '17px'
                        }}>
                            Want to become a self-employed Mortgage Broker?
                            </h3>
                    <p style={{
                        width: '220px',
                        color: 'white',
                        fontSize: '18px'
                        }}>
                        Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam gravida odio at semper semper…
                        </p>
                        <div className="allRecources-link">
                        <p style={{
                        color:'white',
                        fontSize: '14px',
                        paddingRight: '10px'
                        }}>
                            Read More
                            </p>
                     <button 
                            style={{
                            background: 'none'
                         }}
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button> 
                    </div>
                    </div>
                  
                          
                </div>
                <div className='insights-content'>
                    <img className="insights-background" src={insights3} />
                    <img className="insights-shade" src={shade} />
                    <div className='text-cont'>
                    <h6 style={{
                        color:'orange'
                        }}>
                            20th June
                            </h6>
                    <h3 style={{
                        color:'white',
                        fontSize: '17px'
                        }}>
                            Want to become a self-employed Mortgage Broker?
                            </h3>
                    <p style={{
                        width: '220px',
                        color: 'white',
                        fontSize: '18px'
                        }}>
                        Paragragh Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam gravida odio at semper semper…
                        </p>
                        <div className="allRecources-link">
                        <p style={{
                        color:'white',
                        fontSize: '14px',
                        paddingRight: '10px'
                        }}>
                            Read More
                            </p>
                     <button 
                            style={{
                            background: 'none'
                         }}
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button> 
                    </div>
                    </div>
                   
                          
                </div>
            </div>
            <div className="insights-footer">
                    <h1 style={{
                        fontSize:'60px'
                    }}>
                        It all starts with a conversation.
                    </h1>
                    <hr style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    width: '100%'  
                    }}
                    />
                    <div className='footer-row'>
                    <p style={{
                            width: "43%",
                            fontSize: "18px"
                    }}>
                    We know it’s not always a good time, 
                    so you can schedule a call back at a time that works for you. 
                    </p>
                    <div className="footer-link">
                    <p style={{
                        color:'black',
                        paddingRight: '8px'
                        }}>
                            Let's Talk
                            </p>
                    <button 
                        style={{
                        background: 'none',
                        }}
                            className="client-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button>  
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Insights;