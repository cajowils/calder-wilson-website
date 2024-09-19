import React, { ReactElement } from "react";
import "../assets/Contact.css";
import { Email, GitHub, LinkedIn, FileOpen } from "@mui/icons-material";
import { Icon } from "@material-ui/core";

const ContactItem: React.FC<{
  name: string;
  link: string;
  icon: ReactElement;
}> = (props) => {
  return (
    <a
      className="contact-item"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <Icon>{props.icon}</Icon>
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <div className="socials">
        <ContactItem
          name="LinkedIn"
          link="https://www.linkedin.com/in/calderjwilson/"
          icon={<LinkedIn />}
        />
        <ContactItem
          name="GitHub"
          link="https://github.com/cajowils?tab=repositories"
          icon={<GitHub />}
        />
        <ContactItem
          name="Email"
          link="mailto:calderjwilson@gmail.com"
          icon={<Email />}
        />
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/164ZewC6KGWRlGFRjBMTMXC5assQ84GCP/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
        <FileOpen />
      </a>
    </div>
  );
};

export default Contact;
