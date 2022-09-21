import React from 'react'
import Profile from './Profile'
import About from '../About/About'
import Skills from '../Skills/Skills'
import './Home.css'

export default function Home(){
    return(
        <div className='home-container'>
           <Profile/> 
           <About/> 
           <Skills/>
        </div>
    )
}