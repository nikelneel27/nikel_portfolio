import React from "react";
import styles from "./contact.module.css"
function SocialLinks() {
  return (
    <div
      className={styles.iconsContainer}
      style={{
        fontSize: "2rem",
      }}>
      <a
        className={styles.socialIcon}
        target="-blank"
        href="">
        <i className={`fab fa-github`}></i>
      </a>

      <a className={styles.socialIcon} target="-blank" href="">
        <i className="fab fa-twitter"> </i>
      </a>
      <a className={styles.socialIcon} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nikhilneelakantan27@gmail.com" target="_blank" rel="noreferrer">
        <i class="fas fa-envelope"></i>
      </a>

    </div>
  );
}

export default SocialLinks;