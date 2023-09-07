import React from 'react';
import { GitHub } from '@mui/icons-material';
import '../assets/Projects.css';


const Project: React.FC<{name: string, description: string, github: string, skills: string[]}> = (props) => {
  return (
    <div className='project'>
      <div className='project-header'>
        <h2>{props.name}</h2>
        <a className='project-link' href={props.github} target='_blank' rel="noreferrer">
          <GitHub />
        </a>
      </div>
      <p>{props.description}</p>
      <div className='skill-images'>
          {props.skills.map((skill, index) => <img key={index} src={process.env.PUBLIC_URL + skill} />)}
      </div>
    </div>
  )
}
  

const Projects: React.FC = () => {
  return (
    <div id='projects' className='projects-page'>
        <h1>Projects</h1>
        <div className='projects-container'>
          <Project
          name='Spotify Match'
          description='Dating app with a musical twist!'
          github='https://github.com/cajowils/Spotify-Match'
          skills={[
            'logos/react-logo.svg',
            'logos/expressjs-logo.svg',
            'logos/sql-logo.svg',
            'logos/aws-logo.svg',
            'logos/jira-logo.svg',
            'logos/rest-logo.svg',
          ]}/>
        </div>
    </div>
    );
}

export default Projects;
