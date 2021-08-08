import React, {useEffect} from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect' 
import AOS from 'aos';
import 'aos/dist/aos.css'


function HomePage() {
     useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="HomePage">

            <header className="hero" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h1 className="hero-text">
                    Hi, I am <span>Elias T</span><br/>

                    <span style={{display: "flex",justifyContent: 'center', alignItems: 'center'}}><h4 style={{color: '#ffffff'}}>I'm a</h4> &nbsp;&nbsp;
                    <Typewriter 
                    options={{
                     autoStart: true,
                     loop: true,
                     delay: 40,
                     strings:[
                         'Developer',
                         'Designer',
                         'Motion Graphics',
                         'Vedio Editor'
                     ]      
                    }}
                    />
                    </span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
