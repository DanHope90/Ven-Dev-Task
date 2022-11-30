/* eslint-disable jsx-a11y/alt-text */
import './LatestRoles.css';
import Slider from '../Slider/Slider';
import arrowRight from "./arrow-right.svg"

function LatestRoles() {

    return(
    <div className='latestRoles-container'>
        <div className='roles-title-cont'>
        <h1 className="roles-h1">Latest Roles!</h1>
        <div className='role-title-description'>
            <h3>
                Recent opportunities across Finance, Mortgages and Property</h3>
            <div className="viewRoles-link">
                    <p style={{
                        paddingRight: '7px',
                    }}>View all roles</p>
                   
                    <button 
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
                    }}
                    />
        </div>
        <div className="liveRole-cont">
            <Slider />
        </div>
    </div>
    
    )
    
}

export default LatestRoles;