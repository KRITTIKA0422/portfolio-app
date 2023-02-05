import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./Profile.css";
export default function Profile(){
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profie-details'>
                    <div className="profile-details-name">
                    <div className='contactsocial'>
                        <a href="https://www.linkedin.com/in/krittika-podder-368b60151/" target="_blank">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="https://github.com/KRITTIKA0422" target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        </div>
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Krittika Podder</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1><TypeAnimation
      sequence={[
        'Full Stack Developer 😀',
        1000, 
        'Enthusiastic Dev 💻', 
        2000, 
        'Frontend & Backend Dev 👩‍💻',
        3000,
        'Mern Stack Developer 😊', 
        () => {
          console.log('Done typing!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    /></h1>
                            <span className='profile-role-tagline'>
                            Recently trained Full Stack Developer with a passion for developing web applications
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href="https://drive.google.com/uc?export=view&id=1EWyZ2sJH3jxskETsugiBmbh9MonsZF5m" target="_blank">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                    
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
        </div>
        </div>
            
    );
}