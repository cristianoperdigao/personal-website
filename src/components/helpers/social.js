import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function LayoutSocial() {
    return (
        <div className="social-networks-container">
            <ul className="social-networks-ul fade-enter-done">
                <li className="mb-3 ml-2">
                    <a href="https://github.com/cristianoperdigao" target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="mb-3 ml-2">
                    <a href="https://www.linkedin.com/in/cristianoperdigao/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li className="mb-3 ml-2">
                    <a href="https://twitter.com/cristianodpp" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
            </ul>
        </div>        
    );
}

export default LayoutSocial;