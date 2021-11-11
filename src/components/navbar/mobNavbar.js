import React, {useState} from "react";
import styles from "./navStyle.module.css";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import Slide from '@material-ui/core/Slide';


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  zIndex: 100;
  color: black;
  padding: 30px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: aliceblue;
  width: 70%;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 30%;
`;

const navList = ["About", "Work", "Skills", "Experience", "Contact"];

const MobileNavLinks = () => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = (e) => {
      setTimeout(function(){
      e.preventDefault();
      setOpen(false)
      },100
      ) 
    };
    return (
      <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
        <Slide direction={'left'} in={true} mountOnEnter unmountOnExit>
          <LinksWrapper>
            {navList.map((item, index) => (
            <li key={index + 1} className={styles.navLink} style={{padding:"20px"}}>
              <a href={`#${item}`} onClick={handleClick}>{item}</a>
            </li>
          ))}
          <div className="div-resume"><a className="resume-download" href="./resume/nikel.pdf" download>Resume</a></div>
          </LinksWrapper>
        </Slide>
        )}
      </NavLinksContainer>
    );
  }


export default MobileNavLinks;

