/* eslint-disable jsx-a11y/alt-text */
import './Footer.css';
import linkedin from './linkedin-in-brands.svg';
import facebook from './facebook-f-brands.svg';
import twitter from './twitter-brands.svg';
import instagram from './instagram-brands-1.svg';
import buttonBlack from'./button-black.svg';
import emailIcon from './email-icon.svg';
// import {AiOutlineMail} from 'react-icons/ai';

function Footer() {

    return(
        <><div className="footer-container">
            <div className="footer-block">
                <h4>Contact Us</h4>
                <p className='footer-p'>Main Office: 0161 989 5670</p>
                <p className='footer-p'>Property Team: 0161 989 5670</p>
                <p className='footer-p'>Finance Team: 0161 989 5670</p>
                <p className='footer-p-b'>Email: hello@integro.partners</p>
                <h4>Connect with Us</h4>
                <div className='socials'>
                    <img className='social-logo' src={linkedin} />
                    <img className='social-logo' src={twitter} />
                    <img className='social-logo' src={instagram} />
                    <img className='social-logo' src={facebook} />
                </div>
            </div>
            <div className="footer-block">
                <h4>Quick Links</h4>
                <p className='footer-p'>Home</p>
                <p className='footer-p'>About Us</p>
                <p className='footer-p'>Clients</p>
                <p className='footer-p'>Candidates</p>
                <p className='footer-p'>Media Hub</p>
                <p className='footer-p-b'>Job Search</p>
            </div>
            <div className="footer-block">
                <h4>Industries</h4>
                <p className='footer-p'>Property</p>
                <p className='footer-p-b'>Financial Services</p>
            </div>
            <div className="footer-block">
                <h4>Email Newsletter</h4>
                <p className='footer-p-email'>
                    Keep up to date with opportunities and industry insights</p>
                    <div className='form-container'>
                    <form>
                    <input style={{
                        paddingRight: '10px'
                    }}
                        className='email-input'
                        type="email"
                        placeholder='    Email Address' />
                </form>
                <img className='black' src={buttonBlack} />
                <img className='email-icon' src={emailIcon} />
                </div>
            </div>
        </div>
    
        <footer>
                <p>Copyright Integro Partners</p>
                <p>Privacy Policy   Slavery & Human Trafficking Statement   Terms & Conditions</p>
                <p>Site by Venn</p>   
                </footer>
        </>
      
    )
}

export default Footer;
