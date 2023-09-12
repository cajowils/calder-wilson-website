import React from 'react';
import { GitHub, OpenInNew } from '@mui/icons-material';
import getSkillLogo from './getSkillLogo';
import '../assets/Projects.css';


const Project: React.FC<{name: string, description: string, github: string, links: string[], image: string, imageBackground: string, skills: string[]}> = (props) => {
  return (
    <div className='project'>
      <div className='project-info-container'>
        <img className='project-image' src={process.env.PUBLIC_URL + props.image} style={{ backgroundColor: props.imageBackground }} alt={props.name} />
        <div className='project-header'>
          <h2 className='project-title'>{props.name}</h2>
          { props.links ? <div className='project-links'>
            {props.links.map((link, index) => <a key={index} className='project-link' href={link} target='_blank' rel="noreferrer"> <OpenInNew /> </a>)}
          </div> : null}

          { props.github ? <a className='project-github' href={props.github} target='_blank' rel="noreferrer">
            <GitHub />
          </a> : null}
        </div>
        <p className='project-description'>{props.description}</p>
      </div>
      <div className='skill-images'>
          {props.skills.map((skill, index) => <img key={index} src={getSkillLogo(skill)} alt={skill} />)}
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
          description='Dating app with a musical twist! Users are matched based on their Spotify listening data. Built with React Native, Express, and PostgreSQL.'
          github='https://github.com/cajowils/Spotify-Match'
          links={[]}
          image='images/spotify-match-logo.png'
          imageBackground='#22223B'
          skills={[
            'React', 'Express.js', 'SQL', 'AWS', 'Jira', 'REST'
          ]}/>
          <Project
          name='HTTP Server'
          description='An HTTP server written from scratch in C. Functionality includes multi-threading, read-write atomicity, and non-blocking I/O. Used shell scripts to automate testing.'
          github='https://github.com/cajowils/httpserver'
          links={[]}
          image='images/terminal-http.jpeg'
          imageBackground='#000'
          skills={[
            'C', 'Bash', 'UNIX'
          ]}/>
          <Project
          name='Personal Portfolio'
          description='This website! Built with React and TypeScript. I aimed to create a clean and intuitive design that showcases my projects and skills, with emphasis on user experience.'
          github='https://github.com/cajowils/calder-wilson-website'
          links={[]}
          image='images/calder.jpeg'
          imageBackground='#22223B'
          skills={[
            'React', 'HTML', 'CSS', 'TypeScript'
          ]}/>
          <Project
          name='text2gif'
          description='Gif reccomendation engine built with flask. Uses a recurrent neural network to suggest gifs based on text input through word embeddings and emotion analysis.'
          github='https://github.com/cajowils/text2gif'
          links={[]}
          image='images/text2gif-neural-net.gif'
          imageBackground='#22223B'
          skills={[
            'Python', 'Tensorflow', 'HTML', 'CSS', 'Pandas', 'Flask'
          ]}/>
          <Project
          name='Website Design'
          description='Collaborated with local businesses to design and implement their vision. Used Wix to create a user-friendly interface for clients to update their websites.'
          github=''
          links={['https://www.californiacorgisinparadise.com/', 'https://foggymtnmusic.com']}
          image='images/web-design.png'
          imageBackground='#22223B'
          skills={[
            'Wix',
          ]}/>
        </div>
        
    </div>
    );
}

export default Projects;
