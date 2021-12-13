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
                    <p className="featured-desc">The purpose of this app helps the HR to build a detailed joining offer letter that would be given to the suitable candidate ie.  Position offered, complete breakdown of salary details, benefits, equity. </p>

                    <p className="featured-desc">Technologies used :  HTML, CSS, Java Script, Vue, Charts used- Echart <p><strong>Link :</strong><a href="https://dunder-mil.netlify.app/" target="_blank">https://dunder-mil.netlify.app/</a></p> </p>
                </div>
            </div>
            <a href="https://dunder-mil.netlify.app/" target="_blank"> <img src={dunderMifflin}
                alt="featured" /></a>
            <div className="section-border"></div>

            {/* -----------------   sub project  ------------------ */}
            <div className="left">
                <div className="inner transition2">

                    <a href="#" className="featured-title"></a>
                    <p className="featured-desc"></p>
                    <p className="featured-desc"></p>


                </div>
            </div>
            {/* <a href="https://pets-meetup-vue.netlify.app/" target="_blank"> <img src={petsmeetup}
                alt="featured" /></a>
            <div className="section-border"></div> */}

            {/* -----------------   sub project  ------------------ */}
            <div className="left hidden-project">
                <div className="inner transition2">

                    <a href="#" className="featured-title">Pets Meetup</a>
                    <p className="featured-desc">This app was built to help pet parents  create and register for any pet meet up that is available. It can also be used for conducting adoption drive for Animal  shelters.

</p>
                    <p className="featured-desc">Technologies used :  HTML, CSS, Java Script, Vue,  Vuetify, Firebase <p><strong>Link :</strong><a href="https://pets-meetup-vue.netlify.app/" target="_blank">https://pets-meetup-vue.netlify.app/</a></p></p>
                </div>
            </div>
            <a href="https://pets-meetup-vue.netlify.app/" target="_blank"> <img src={petsmeetup}
                alt="featured" /></a>
            <div className="section-border"></div>


            ------------
            <div className="left">
                <div className="inner transition2">

                    <a href="#" className="featured-title">Image Search</a>
                    <p className="featured-desc">This app helps in finding beautiful high resolution images of the item you are searching for. Its similar to the unsplash website, which helps Photographers to showcase their work.

</p>
                    <p className="featured-desc">Technologies used :  HTML, CSS, Java Script, Vue, Bootstrap, Unsplash Apis, Firebase
                    <p><strong>Link :</strong><a href="https://image-search-unsplash-api.netlify.app/" target="_blank">https://image-search-unsplash-api.netlify.app/</a></p></p>


                </div>
            </div>
            <a href="https://image-search-unsplash-api.netlify.app/" target="_blank"> <img src={ImageSearch}
                alt="featured" /></a>
        </section>
    )
}

export default Projects;