import React from 'react';
import logo from '../../assets/images/portlogo1.svg'
import Rentomojo from '../../assets/images/logo.svg'
import TY from '../../assets/images/ty.png'
import ITC from '../../assets/images/itc.png'
import C from '../../assets/images/C.png'
import skills from '../../data/skills.json'
const Skills = () => {

    return (
        <div className="skills" id="Skills">
            <div className="skills-container">
                <div className="skills-container-main">
                    {skills.map((e) => (
                        <div className="skills-container-main-skill">
                            <div><i className={`fab fa-${e.key} fa-2x`}></i></div>
                            <div>{e.name}</div>
                        </div>
                    ))}


                </div>
                <ul id="Experience">
                    <li className="transition2">
                        <div className="icon-contianer one">
                            <img src={Rentomojo} alt="Rentomojo" />
                        </div>
                        <p className="skill-title"> Rentomojo</p>
                        <p className="featured-desc skills-desc">Senior SDET</p>
                    </li>

                    <li className="transition2">
                        <div className="icon-contianer two">
                            <img src={TY} alt="Test Yantra" />
                        </div>
                        <p className="skill-title"> Test Yantra </p>
                        <p className="featured-desc skills-desc">Senior SDET</p>
                    </li>

                    <li className="transition2">
                        <div className="icon-contianer two">
                            <span class="skills-captera-title">CAPTERA</span>
                        </div>
                        <p className="skill-title"> Captera Solutions</p>
                        <p className="featured-desc skills-desc">QA Engineer</p>
                    </li>
                    <li className="transition2">
                        <div className="icon-contianer two">
                            <img src={ITC} alt="ITC" />
                        </div>
                        <p className="skill-title"> ITC Infotech</p>
                        <p className="featured-desc skills-desc">Software Engineer</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;