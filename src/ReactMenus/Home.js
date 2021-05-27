import React from 'react'
import programmer from '../images/programmer.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <div>
           <Common 
            name='Grow Your Skills'
            imgsrc={programmer}
            visit='/services'
            btnname='Get Started'/>
        </div>
    )
}

export default Home;
