import React from "react";

import SocialLinks from "./socialLinks";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container} id="Contact" style={{paddingTop:"30px"}}>
        <div styles={{display:"block"}}>
            <h2>----  Find Me On  ----</h2>
            <SocialLinks />
        </div>
    </div>
  );
};

export default Contact;