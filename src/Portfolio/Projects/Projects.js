import React from 'react';
import "./Projects.css";
import {useState} from "react";
export default function Projects(){

    const frontendList=[{"name":"Price Display App",
    "image":"https://drive.google.com/uc?export=view&id=14YR5hR16l-FFUV4OCbMrCQVKLyL2_i-P",
    "summary":"Responsive webpage displaying price lists using React js",
    "githubcode":"https://github.com/KRITTIKA0422/https---github.com-KRITTIKA0422-Guvi-Assignment-day-21",
    "deployment":"https://cheerful-syrniki-8cba73.netlify.app/"},
    {"name":"Product App",
    "image":"https://drive.google.com/uc?export=view&id=1C4jxJRBjFx_9dKXbDXPU1atQyecBlPQw",
    "summary":"Web App using react js to display products, creation of products using formik by fetching data and performing CRUD operations using MockApi.",
    "githubcode":"https://github.com/KRITTIKA0422/product-app",
    "deployment":"https://statuesque-quokka-6cb017.netlify.app/"},
    {"name":"HTML Forms",
    "image":"https://drive.google.com/uc?export=view&id=1cKKpcS29EGYS-mIgnWZso1pgdvOE8Vp0",
    "summary":"Design of HTML forms with automatic record of data at the end of webpage and refresh of the webpage after submitting the form details",
    "githubcode":"https://github.com/KRITTIKA0422/Guvi-Assignment-day-16-HTML-Forms",
    "deployment":"https://steady-creponne-42fa15.netlify.app/"},
         {"name":"Check for Holidays",
         "image":"https://drive.google.com/uc?export=view&id=1w6VjEfd3fdzZ-O8-kCz4G06TyAucvRSE",
         "summary":"Giving a date and country as input and checking for national holidays by matching and fetching information from Holiday API",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-20-Holidays",
         "deployment":"https://velvety-rugelach-f1c0a1.netlify.app/"},
         {"name":"Countdown Wish",
         "image":"https://drive.google.com/uc?export=view&id=1LdxrZSTBr20AwzA6sZ6pPEn41eBIFp0x",
         "summary":"Responsive webpage for wishing Independence Day after countdown using callback function",
         "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-17-countdown",
         "deployment":"https://venerable-ganache-db01f0.netlify.app/"},
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
         {
          "name":"Survey Form",
          "image":"https://drive.google.com/uc?export=view&id=1Pz02w_1jeTNr_6C6zGmUhE2TS3yeZCPy",
          "summary":"A survey form designed using HTML input tags and CSS",
          "githubcode":"https://github.com/KRITTIKA0422/Assignment-day-14-Survey-form",
          "deployment":"https://flourishing-granita-a17614.netlify.app/"},
          {"name":"Github Profile",
          "image":"https://drive.google.com/uc?export=view&id=19KDomquyMgmF2mw4i04CYsE-JtFYScMV",
          "summary":"Responsive github profile designed with bootstrap, HTML & CSS",
          "githubcode":"https://github.com/KRITTIKA0422/Guvi-Assignment-Day-14-Github-Profile",
          "deployment":"https://magical-tiramisu-a9d009.netlify.app/"}
         ];
       
        const projectList=[ {
          "name":"WebChat App",
          "image":"https://drive.google.com/uc?export=view&id=1sHh_eKT-g8KPfqTRdnzpZo9ju70jYBnl",
          "summary":"Chat App using React js as frontend with socket.io connection and also user signup, user login using hashing password and Jsonwebtoken with storing and fetching data from Mongo DB connected using Node js.",
          "frontendcode":"https://github.com/KRITTIKA0422/webchat-app",
          "backendcode":"https://github.com/KRITTIKA0422/webchat-app-Backend",
          "netlify":"https://courageous-sundae-380b12.netlify.app",
          "backendurl":"https://webchatappbackend-nw13.onrender.com"},
          {
            "name":"Pizza Mania App",
            "image":"https://drive.google.com/uc?export=view&id=1Rzl3IMljbAH1Br6761jKlrzst6ZdwF_B",
            "summary":"Responsive pizza app using React js and Node js with payment gateway integration and use of CRUD operations to add, view pizzas along with user login in which admin has the permission to delete an item from the App.",
            "frontendcode":"https://github.com/KRITTIKA0422/payment-app",
            "backendcode":"https://github.com/KRITTIKA0422/PaymentGateway-Backend",
            "netlify":"https://leafy-torte-d9ad2a.netlify.app",
            "backendurl":"https://paymentgatewaybackend.onrender.com"},
          {
            "name":"Gmail Clone App",
            "image":"https://drive.google.com/uc?export=view&id=1-vkmh3aGONfKyDdGCh6j8HQB2cfQxIHH",
            "summary":"Gmail Clone with features of sending and receiving mails using frontend coding. CRUD operations of sent mails and received mails api, authorization and authentication of user of gmail account using node js and Mongo DB.",
            "frontendcode":"https://github.com/KRITTIKA0422/Gmail-clone-Frontend",
            "backendcode":"https://github.com/KRITTIKA0422/Gmail-clone-Backend",
            "netlify":"https://resplendent-douhua-bf7f72.netlify.app",
            "backendurl":"https://gmailclonebackend.onrender.com"},
          {
        "name":"Movie Display App",
        "image":"https://drive.google.com/uc?export=view&id=1wOpWU2ridZCjYlgJJWrRsVBsWXFv12f6",
        "summary":"Responsive movie app showing the movies in container with hidding and showing summary as per user interaction using react js and fetching movie data from Mongo DB through Node js",
        "frontendcode":"https://github.com/KRITTIKA0422/moviedisplay-app",
        "backendcode":"https://github.com/KRITTIKA0422/Assignment-day-36-node",
        "netlify":"https://effervescent-longma-64cf64.netlify.app",
        "backendurl":"https://moviedisplaybackend.onrender.com"}
       ];
  return(
<div className='projects'>
  <h1>PROJECTS/WORKS</h1>
  <div className='credentials'>
  <div className='usercredentials'>
  <h3>Demo Credentials of User</h3>
    <p>Username = Krittika</p>
    <p>Password = welcomek</p>
    <p>Email = krittika489podder@gmail.com</p>
    <p>Test Cards (VISA) = 4111 1111 1111 1111</p>
    <p>Random CVV with any future Expiry Date</p>
    </div>
  <div className='admincredentials'>
  <h3>Demo Credentials of Admin</h3>
    <p>Username = Arnab</p>
    <p>Password = welcomea</p>
    <p>Email = krittikaarnab46@gmail.com</p>
    <p>Test Cards (VISA) = 4111 1111 1111 1111</p>
    <p>Random CVV with any future Expiry Date</p>
    </div>
    </div>
  
 <div className='project-list-container'>
{projectList.map((p)=>(<Projectworks project ={p}/>))}</div>
<div className='fproject-list-container'>
{frontendList.map((f)=>(<Frontendworks fproject ={f}/>))}</div>
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
                                <a href={project.backendurl} target="_blank">
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
        