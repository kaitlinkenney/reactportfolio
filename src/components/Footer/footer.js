import React from "react";
import "./style.css";
import { GrGithub, GrMail } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

//footer will appear on every page with link to Github, LinkedIn, and email
function Footer() {
  return (
    <footer className="footer mt-36">
      <div>
      <span>
          
          <a className="github" style={{float: "right"}} href={'https://github.com/kaitlinkenney'}><GrGithub style={{ height: 43, width: 35}} /></a>
          <a className="linkedin" style={{float: "right"}} href={'https://www.linkedin.com/in/kaitlin-kenney-12b01a1a7/'}><GrLinkedin style={{ height: 44, width: 30 }}/></a>
          <a className="email" style={{float: "right"}} href={"mailto:kaitlin.kenney96@gmail.com"}><GrMail style={{height: 50, width: 35}}/></a>
      </span>
      </div>
    </footer>
  
  );
}

export default Footer;