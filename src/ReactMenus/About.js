
import React from 'react'
import devloper from '../images/devloper.png';
import Common from './Common';

const About = () => {
    return (
        <div>
            <Common 
              name='Welcome To About Page'
              imgsrc={devloper}
              visit='/services'
              btnname='Contact Now'
            />
        </div>
    )
}

export default About;
