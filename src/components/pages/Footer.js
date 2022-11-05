import '../styles.css';
import React from 'react';
import twittericon from '../images/twitter.png';
import linkedinicon from '../images/linkedin.png';
import githubicon from '../images/github.png';

function Footer() {
    return (
        <footer className="footer d-flex justify-content-around">
            <a href="https://github.com/nvmax" target="_blank" rel="noopener noreferrer">
                <img className="socialicon" src={githubicon} alt="Github" />
            </a>
            <a href="https://twitter.com/Max_Linderman" target="_blank" rel="noopener noreferrer">
                <img className="socialicon" src={twittericon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/jerrod-linderman-0687a7185/" target="_blank" rel="noopener noreferrer">
                <img className="socialicon" src={linkedinicon} alt="LinkedIn" />
            </a>
        </footer>
    )
}

export default Footer;