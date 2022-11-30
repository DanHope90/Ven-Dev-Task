import "./CandidateHub.css";
import GreenImage from './green-image.svg';
import arrowRight from './arrow-right.svg';

function CandidateHub() {

    return(
        <div className="candidate-container">
            <div className="cand-img-cont">
                <img className="green-img" src={GreenImage} />
            </div>
            <div className="cand-textbox-cont">
                <h2>Placing top talent in the best roles</h2>
                <hr style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        width: "100%"
                    }}
                    />
                    <p style={{
                        fontFamily: 'Montserrat'
                    }}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut 
                    labore et dolore magna 
                    aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="hub-link">
                    <p className="hub-link-p">
                        Visit the Candidate Hub
                        </p>
                    <button 
                            className="hub-btn"
                            type='button'
                            >
                             {<img className="arrow-sbmt" src={arrowRight} />}  
                            </button>
                    </div>
            </div>

        </div>
        
    )
}

export default CandidateHub;