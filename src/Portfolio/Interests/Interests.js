import React from 'react';
import "./Interests.css";
export default function Interests(){
    const interest=[{image:"https://cdn.dribbble.com/users/2243442/screenshots/11362056/cooking-at-home.gif", name:"Cooking"},
    {image:"https://i.pinimg.com/originals/e6/65/27/e66527e3e37e30d9fc461a22b3d6b9d3.gif", name:"Singing"},
    {image:"https://media2.giphy.com/media/w3IE6RmM6bwrmLFEUb/giphy.gif", name:"Observation"}];
    return(
<div className='interests-container'>
<div className='interests-heading'><h1>INTERESTS</h1></div>
<div className='interesting-container'>{interest.map((i)=>(<Interesting hobbies={i}/>))}</div>
</div>
    );
}

function Interesting({hobbies}){
      return(
        <div className="hobbies-container">
          <img src={hobbies.image} alt={hobbies.name} className="hobbies-poster"></img>
          <div className="hobbies-specs"><h2 className="hobbies-name">{hobbies.name}</h2>
        </div>  
        </div>
      );
      }