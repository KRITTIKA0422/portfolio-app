import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gxtf2bh', 'template_66eathx', form.current, 'jkY7k2OmscAW0uQ6h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
    return(
<div className='contact-container'>
  <h1>CONTACT ME</h1>
<form ref={form} className='form-details' onSubmit={sendEmail}>
      <div className='form-container'>
        <div id="first" className='row'>
          <div className='col-2'><label for="name">Name</label>
          </div>
          </div>
          <div id="second" className="row">
            <div className='col-2'><input type="text" id="name" name="name"required/>
            </div>
            </div>
            <div id="third" className='row'>
          <div className='col'><label for="email">Email Id</label>
          </div>
          </div>
          <div id="fourth" className="row">
            <div className='col-2'><input type="email" id="email" name="email"required/>
            </div>
            </div>
            <div id="fifth" className='row'>
          <div className='col'><label for="message">Message</label>
          </div>
          </div>
          <div id="sixth" className="row">
            <div className='col-2'><textarea id="message" name="message" rows='4'/>
            </div>
            </div>
          <input type="submit" value="SEND" className="btn highlighted-btn" id="send"/>
          </div>
         </form>
         <div className='colz'>
                        <h2>SOCIAL</h2>
                        <div className='colz-icon'>
                        <a href="https://www.linkedin.com/in/krittika-podder-368b60151/" target="_blank">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="https://github.com/KRITTIKA0422" target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        </div> 
                        <h2><i className="fa fa-home" aria-hidden="true"></i><span>E-113/11 ,RAMGARH, KOLKATA-700047. WEST BENGAL, INDIA</span></h2>
                        <h2><i className="fa fa-envelope" aria-hidden="true"></i><span>krittika489podder@gmail.com</span></h2>
                        <h2><i className="fa fa-phone"></i><span>8697009612</span></h2>                      
          </div>
</div>
    );
}
