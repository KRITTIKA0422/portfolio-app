import React from 'react';
import "./Projects.css";
import {useState} from "react";
export default function Projects(){

    const frontendList=[{
         "name":"Survey Form",
         "image":"https://drive.google.com/uc?export=view&id=1Pz02w_1jeTNr_6C6zGmUhE2TS3yeZCPy",
         "summary":"A survey form designed using HTML input tags and CSS",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-14-Survey-form",
         "deployment":"https://flourishing-granita-a17614.netlify.app/"},
         {"name":"Github Profile",
         "image":"https://drive.google.com/uc?export=view&id=19KDomquyMgmF2mw4i04CYsE-JtFYScMV",
         "summary":"Responsive github profile designed with bootstrap, HTML & CSS",
         "githubcode":"https://github.com/KRITTIKA0422/Guvi-Assignment-Day-14-Github-Profile",
         "deployment":"https://magical-tiramisu-a9d009.netlify.app/"},
         {"name":"Countdown Wish",
         "image":"https://drive.google.com/uc?export=view&id=1LdxrZSTBr20AwzA6sZ6pPEn41eBIFp0x",
         "summary":"Responsive webpage for wishing Independence Day after countdown using callback function",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-17-countdown",
         "deployment":"https://venerable-ganache-db01f0.netlify.app/"},
         {"name":"HTML Forms",
         "image":"https://drive.google.com/uc?export=view&id=1cKKpcS29EGYS-mIgnWZso1pgdvOE8Vp0",
         "summary":"Design of HTML forms with automatic record of data at the end of webpage and refresh of the webpage after submitting the form details",
         "githubcode":"https://github.com/KRITTIKA0422/Guvi-Assignment-day-16-HTML-Forms",
         "deployment":"https://steady-creponne-42fa15.netlify.app/"},
         {"name":"Pagination",
         "image":"https://drive.google.com/uc?export=view&id=1jj_aw7Lb3n7mGkwQyKS3IDVKGnl6Djhf",
         "summary":"Webpage showing tables where the rows are divided into multiple pages using pagination in HTML & Document Object Manipulation",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-16-pagination",
         "deployment":"https://cheery-swan-65df32.netlify.app/"},
         {"name":"Dog Webpage",
         "image":"https://drive.google.com/uc?export=view&id=1z3nUlGA6E2HxV8i-L0NrCYyKzoQx3gGf",
         "summary":"Webpage designed by fetching images of dogs from dog API using async/await and promise",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-20-api-dogs",
         "deployment":"https://keen-speculoos-9b7ddb.netlify.app/"},
         {"name":"Emoji Webpage",
         "image":"https://drive.google.com/uc?export=view&id=1uT49z3gzIr1UVv6zsqVxdEx4aeP1JKsu",
         "summary":"Designed emoji webpage by fetching data from emoji API and also applying pagination using HTML, DOM and CSS",
         "githubcode":"https://github.com/KRITTIKA0422/GUVI-Assignment-day-20-emoji-api",
         "deployment":"https://celadon-tulumba-35496a.netlify.app/"},
         {"name":"Check for Holidays",
         "image":"https://drive.google.com/uc?export=view&id=1w6VjEfd3fdzZ-O8-kCz4G06TyAucvRSE",
         "summary":"Giving a date and country as input and checking for national holidays by matching and fetching information from Holiday API",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-20-Holidays",
         "deployment":"https://velvety-rugelach-f1c0a1.netlify.app/"},
         {"name":"Price Display App",
         "image":"https://drive.google.com/uc?export=view&id=14YR5hR16l-FFUV4OCbMrCQVKLyL2_i-P",
         "summary":"Responsive webpage displaying price lists using React js",
         "githubcode":"https://github.com/KRITTIKA0422/https---github.com-KRITTIKA0422-Guvi-Assignment-day-21",
         "deployment":"https://cheerful-syrniki-8cba73.netlify.app/"}];
         const backendList=[{
            "name":"Hall Booking Task",
            "githubcode":"https://github.com/KRITTIKA0422/hall-booking",
            "deployment":"https://hall-booking-krit.herokuapp.com",
            "summary": "api for viewing welcome to hall booking- https://hall-booking-krit.herokuapp.com, api for creating and getting rooms- https://hall-booking-krit.herokuapp.com/room, api for booking rooms- https://hall-booking-krit.herokuapp.com/bookedrooms, api for listing all rooms with booked data- https://hall-booking-krit.herokuapp.com/bookedrooms, api for listing all customers with booked data- https://hall-booking-krit.herokuapp.com/customers"
        },
            {"name":"Assigning Mentor Task",
            "githubcode":"https://github.com/KRITTIKA0422/assign-mentor",
            "deployment":"https://assign-mentors-app.herokuapp.com/",
            "summary":"api endpoint for viewing welcome to assign mentor-https://assign-mentors-app.herokuapp.com/, api endpoint for creating students- https://assign-mentors-app.herokuapp.com/student, api endpoint for getting students-https://assign-mentors-app.herokuapp.com/student, api endpoint for creating mentors-https://assign-mentors-app.herokuapp.com/mentor, api endpoint for getting mentors-https://assign-mentors-app.herokuapp.com/mentor, api endpoint for assigning multiple students under a mentor-https://assign-mentors-app.herokuapp.com/mentor/:id, api endpoint for assigning a mentor to a student-https://assign-mentors-app.herokuapp.com/student/:id, api endpoint for viewing all students under a mentor-https://assign-mentors-app.herokuapp.com/mentors/:id"
        }];
        const projectList=[ {
        "name":"Movie Display App",
        "image":"https://drive.google.com/uc?export=view&id=1wOpWU2ridZCjYlgJJWrRsVBsWXFv12f6",
        "summary":"Responsive movie app showing the movies in container with hidding and showing summary as per user interaction using react js and fetching movie data from Mongo DB through Node js",
        "frontendcode":"https://github.com/KRITTIKA0422/moviedisplay-app",
        "backendcode":"https://github.com/KRITTIKA0422/Assignment-day-36-node",
        "netlify":"https://unique-churros-a74d61.netlify.app/",
        "heroku":"https://movies-app-guvi.herokuapp.com"}];
    return(
<div className='projects'>
  <h1>PROJECTS/WORKS</h1>
  <h2>Frontend Projects</h2>
<div className='fproject-list-container'>
{frontendList.map((f)=>(<Frontendworks fproject ={f}/>))}</div>
<h2>Backend Projects</h2>
<div className='bproject-list-container'>
{backendList.map((b)=>(<Backendworks bproject ={b}/>))}</div>
<h2>Full Stack Projects</h2>
<div className='project-list-container'>
{projectList.map((p)=>(<Projectworks project ={p}/>))}</div>
</div>
    );
}
function Frontendworks({fproject}){
  
const [fshow,setFshow]= useState(true);
  return(
    <div className="fproject-container">
      <img src={fproject.image} alt={fproject.name} className="fproject-poster"></img>
      <div className="fproject-specs"><h2 className="fproject-name">{fproject.name}</h2>
      <div className='fview-icon'>
                        <a href={fproject.deployment} target="_blank">
                            <i className='fa fa-eye'></i>
                        </a>
                        <a href={fproject.githubcode} target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        </div>
    </div>
    <button onClick={()=>setFshow(!fshow)}><i class='fa fa-info-circle'></i></button>
    {fshow?<p className="fproject-summary">{fproject.summary}</p>:""}   
    </div>
  );
  }

  function Backendworks({bproject}){
  
    const [bshow,setBshow]= useState(true);
      return(
        <div className="bproject-container">
          <div className="bproject-specs"><h2 className="bproject-name">{bproject.name}</h2>
          <div className='bview-icon'>
                            <a href={bproject.deployment} target="_blank">
                                <i className='fa fa-eye'></i>
                            </a>
                            <a href={bproject.githubcode} target="_blank">
                                <i className='fa fa-github'></i>
                            </a>
                            </div>
        </div>
          <button onClick={()=>setBshow(!bshow)}><i class='fa fa-info-circle'></i></button>
          {bshow?<p className="bproject-summary">{bproject.summary}</p>:""}   
        </div>
      );
      }
      function Projectworks({project}){
  
        const [show,setShow]= useState(true);
          return(
            <div className="project-container">
              <img src={project.image} alt={project.name} className="project-poster"></img>
              <div className="project-specs"><h2 className="project-name">{project.name}</h2>
              <div className='view-icon'>
                                <a href={project.netlify} target="_blank">
                                    <i className='fa fa-eye'></i>
                                </a>
                                <a href={project.frontendcode} target="_blank">
                                    <i className='fa fa-github'>Frontend</i>
                                </a>
                                <a href={project.heroku} target="_blank">
                                    <i className='fa fa-eye'></i>
                                </a>
                                <a href={project.backendcode} target="_blank">
                                    <i className='fa fa-github'>Backend</i>
                                </a>
                                </div>
            </div>
              <button onClick={()=>setShow(!show)}><i class='fa fa-info-circle'></i></button>
              {show?<p className="project-summary">{project.summary}</p>:""}   
            </div>
          );
          }
        