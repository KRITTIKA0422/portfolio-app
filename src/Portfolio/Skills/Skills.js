import React from 'react';
import "./Skills.css";
export default function Skills(){
  
    return(
<div className='skillset-container'>
        <h1 className='skill-heading'>TECHNICAL SKILLS</h1>
      <div className='skills-container'>
      <img src={require('../../Assets/Skillspic/javascript.png')} alt="javascript" />
      <img src={require('../../Assets/Skillspic/html.jpg')} alt="html" />
      <img src={require('../../Assets/Skillspic/css.png')} alt="css" />
      <img src={require('../../Assets/Skillspic/bootstrap.png')} alt="bootstrap" />
      <img src={require('../../Assets/Skillspic/react.png')} alt="react js" />
      <img src={require('../../Assets/Skillspic/mysql.jpg')} alt="mysql" />
      <img src={require('../../Assets/Skillspic/mongodb.webp')} alt="mongodb" />
      <img src={require('../../Assets/Skillspic/nodejs.jpg')} alt="node js" />
      <img src={require('../../Assets/Skillspic/aws.png')} alt="aws" />
      <img src={require('../../Assets/Skillspic/cprogramming.png')} alt="c programming" />
      </div>
<h1 className='tools-heading'>TOOLS AND METHODS</h1>  
<div className='tools-container'>
<img src={require('../../Assets/Skillspic/netlify.png')} alt="netlify" />
<img src={require('../../Assets/Skillspic/heroku.png')} alt="heroku" />
<img src={require('../../Assets/Skillspic/postman.png')} alt="postman" />
<img src="https://miro.medium.com/max/1400/1*Rv6kW7EnWmShq7DKEb9-_A@2x.jpeg" alt="vercel" />
<img src="https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-intellyx-BC-logo.png" alt="render" />
</div>
</div>
    );
}
