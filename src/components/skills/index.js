import React from 'react';
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
            </div>
        </div>
    )
}

export default Skills;