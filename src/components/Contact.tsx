import React from 'react';
import '../assets/Contact.css';

const ContactItem: React.FC<{name: string, link: string, icon: string}> = (props) => {
  return (
    <a className='contact-item' href={props.link} target="_blank" rel="noreferrer">
      <img src={props.icon} alt={props.name} />
    </a>
  )
}

const Contact: React.FC = () => {
  return (
      <div id='contact' className='contact'>
        <ContactItem name='LinkedIn' link='https://www.linkedin.com/in/calderjwilson/' icon={process.env.PUBLIC_URL + '/logos/linkedin-logo.svg'} />
        <ContactItem name='GitHub' link='https://github.com/cajowils?tab=repositories' icon={process.env.PUBLIC_URL + '/logos/github-logo.svg'} />
        <ContactItem name='Email' link='mailto:calderjwilson@gmail.com' icon={process.env.PUBLIC_URL + '/logos/email-logo.svg'} />
      </div>
    );
}

export default Contact;
