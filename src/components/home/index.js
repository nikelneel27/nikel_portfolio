import React from 'react';
import '../style.css'
import profileImage from '../../assets/images/nikel.png'
import Navbar from '../navbar';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="hero" id="About">
                <div className="content">
                    <h1>Crafting Websites with Passion and love</h1>
                    <div className="meet">
                        <p>Hello I'm Nikhil Neelakantan</p>

                    </div>
                    <p className="nn-aboutme">Software Engineer with 6 years of experience as a Senior SDET, venturing into Frontend
                    Web Development.
                    </p>

                </div>
                <img src={profileImage} alt="" className="hero-design" />
            </div>
        </>
    )
}

export default Home;