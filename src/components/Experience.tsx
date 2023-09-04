import React from 'react';
import '../assets/Experience.css';


const ExperienceSection = (props: {title: string, logo: string, company: string, date: string, description: string}) => {
    return (
        <div className='experience-section'>
            <img src={props.logo} alt={props.company} />
            {/* <h3>{props.company}</h3> */}
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <p>{props.description}</p>
        </div>
    );
}

const Experience: React.FC = () => {
  return (
    <div id='experience' className='experience-page'>
        <h1>Experience</h1>
        <div className='experience-sections'>
          <ExperienceSection title='Software Development Engineer Intern' logo={process.env.PUBLIC_URL + '../logos/amazon-logo.svg'} company='Amazon' date='Sept 2022 - Dec 2022' description='A brief description of your experience at this company.' />
          <ExperienceSection title='Software Engineer Intern' logo={process.env.PUBLIC_URL + '../logos/nm-logo.svg'} company='Northwesern Mutual' date='June 2022 - Aug 2022' description='A brief description of your experience at this company.' />
        </div>
    </div>
    );
}

export default Experience;
