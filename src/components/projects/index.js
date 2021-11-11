import React from 'react';
import '../style.css'
import dunderMifflin from '../../assets/images/dunder-mifflin.png'
import petsmeetup from '../../assets/images/petsmeetup.png'
import ImageSearch from '../../assets/images/ImageSearch.png'
const Projects = () => {
    return (
        <section className="featured" id="Work">
            {/* -----------------   main project  ------------------ */}
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">
                        Featured Project
                </p>
                    <a href="#" className="featured-title">Dunder Mifflin</a>
                    <p className="featured-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quod deleniti at
                    fugit officiis sequi ipsa commodi et rerum fugiat.</p>
                </div>
            </div>
            <a href="https://dunder-mil.netlify.app/" target="_blank"> <img src={dunderMifflin}
                alt="featured" /></a>
            <div className="section-border"></div>

            {/* -----------------   sub project  ------------------ */}
            <div className="left">
                <div className="inner transition2">

                    <a href="#" className="featured-title">Pets Meetup</a>
                    <p className="featured-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quod deleniti at
                    fugit officiis sequi ipsa commodi et rerum fugiat.</p>
                </div>
            </div>
            <a href="https://dunder-mil.netlify.app/" target="_blank"> <img src={petsmeetup}
                alt="featured" /></a>
            <div className="section-border"></div>

            {/* -----------------   sub project  ------------------ */}
            <div className="left">
                <div className="inner transition2">

                    <a href="#" className="featured-title">Image Search</a>
                    <p className="featured-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quod deleniti at
                    fugit officiis sequi ipsa commodi et rerum fugiat.</p>
                </div>
            </div>
            <a href="https://image-search-unsplash-api.netlify.app/" target="_blank"> <img src={ImageSearch}
                alt="featured" /></a>
            <div className="section-border"></div>
        </section>
    )
}

export default Projects;