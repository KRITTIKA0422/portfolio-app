import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
export default function Profile(){
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profie-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.linkedin.com/in/krittika-podder-368b60151/">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="https://github.com/KRITTIKA0422">
                            <i className='fa fa-github'></i>
                        </a>
                        </div>         
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Krittika Podder</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Full Stack Developer 😀",
                                    1000,
                                    "Enthusiastic Dev 💻",
                                    1000,
                                    "Frontend & Backend Dev 👩‍💻",
                                    1000,
                                    "Mern Stack Developer 😊",
                                    1000
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Recently trained Full Stack Developer with a passion for developing web applications
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="#" download='resume.pdf'>
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