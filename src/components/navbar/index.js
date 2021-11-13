import React from 'react';
import '../style.css'
import { useMediaQuery } from "@material-ui/core";
import MobileNavLinks from './mobNavbar';
const Navbar = () => {
    const navList = ["Work", "Skills", "Experience", "Contact"];
    const isMobile = useMediaQuery('(max-width:675px)');
    return (
        <div className="nav-container">
            <header className="header-left">
                <a href="index.html" className="logo">
                    {`< Nikhil Neel />`}
                </a>
                {!isMobile && <nav>
                    <ul>
                        {navList.map(e => (
                            <li><a href={`#${e}`}>{e}</a></li>
                        ))}
                        <li>
                            <div className="div-resume"><a className="resume-download" href="Resume/123.pdf" download>Resume</a>
                            </div>
                        </li>

                    </ul>
                </nav>}
                {isMobile && <MobileNavLinks list={navList} />}
                {/* <nav>
                
            </nav> */}
            </header>
        </div>
    )
}

export default Navbar;